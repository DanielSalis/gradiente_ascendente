import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateCouponInput } from '@app/input/create-coupon.input'
import { CreateCouponOutput } from '@app/output/create-coupon.output'
import CouponEntity from '@app/entity/coupon.entity'
import PartnerEntity from '@app/entity/partner.entity'

@Injectable()
export class CreateCoupon {
  constructor(
    @InjectRepository(CouponEntity) private readonly couponEntity: Repository<CouponEntity>,
    @InjectRepository(PartnerEntity) private readonly partnerRepository: Repository<PartnerEntity>
  ) {}
  async handle(input: CreateCouponInput): Promise<CreateCouponOutput> {
    const partner = await this.partnerRepository.findOne({ where: { id: input.partnerId } })

    if (!partner) {
      throw new Error('Partner not found')
    }

    await this.couponEntity.save(
      Object.assign(new CouponEntity(), {
        code: input.code,
        quantity: input.quantity,
        value: input.points,
        partner
      })
    )
    return {}
  }
}
