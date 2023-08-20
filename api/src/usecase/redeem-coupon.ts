import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { RedeemCouponInput } from '@app/input/redeem-coupon.input'
import { RedeemCouponOutput } from '@app/output/redeem-coupon.output'
import CouponEntity from '@app/entity/coupon.entity'
import UserEntity from '@app/entity/user.entity'
import WalletEntity from '@app/entity/wallet.entity'
import TransactionEntity from '@app/entity/transaction.entity'
import { ValidateService } from '@app/service/validate.service'
import { ErrorService } from '@app/service/error.service'

@Injectable()
export class RedeemCoupon {
  constructor(
    @InjectRepository(CouponEntity) private readonly couponEntity: Repository<CouponEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(WalletEntity) private readonly walletRepository: Repository<WalletEntity>,
    @InjectRepository(TransactionEntity) private readonly transactionRepository: Repository<TransactionEntity>,
    private readonly errorService: ErrorService,
    private readonly validateService: ValidateService
  ) {}

  async handle(input: RedeemCouponInput): Promise<RedeemCouponOutput> {
    const userWithPersonAndWallet = await this.userRepository.findOne({ where: { id: input.userId }, relations: ['person', 'wallet'] })
    const coupon = await this.couponEntity.findOne({ where: { code: input.couponCode } })
    if (!coupon || !userWithPersonAndWallet || coupon.quantity === 0) {
      throw new Error('Coupon not found')
    }

    const newWallet = await this.walletRepository.save(
      Object.assign(new WalletEntity(), userWithPersonAndWallet.wallet, {
        coupons: [...userWithPersonAndWallet.wallet.coupons, coupon.code],
        points: userWithPersonAndWallet.wallet?.points - coupon.value
      })
    )

    await this.transactionRepository.save({
      // criar enum disso
      operationType: 'SUBTRACTION',
      initialAmount: userWithPersonAndWallet.wallet.points,
      transactionAmount: coupon.value,
      finalAmount: newWallet.points,
      coupon
    })

    return Object.assign(new RedeemCouponOutput(), { couponCode: coupon.code })
  }
}
