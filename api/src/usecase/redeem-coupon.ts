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
import ErrorType from '@app/constant/error.enum'

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
    const inputParsed = await this.validateService.validateAndTransformInput(RedeemCouponInput, input)
    const userWithPersonAndWallet = await this.userRepository.findOne({ where: { id: inputParsed.userId }, relations: ['person', 'wallet'] })
    const coupon = await this.couponEntity.findOne({ where: { code: inputParsed.couponCode } })

    if (!coupon) {
      this.errorService.throw(['Coupon not found'], ErrorType.UNPROCESSABLE_ENTITY)
    }

    if (coupon.quantity === 0) {
      this.errorService.throw(['Coupon not available'], ErrorType.UNPROCESSABLE_ENTITY)
    }

    if (!userWithPersonAndWallet) {
      this.errorService.throw(['User not found'], ErrorType.UNPROCESSABLE_ENTITY)
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
