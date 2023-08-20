import { Injectable } from '@nestjs/common'

import { RetrieveCouponsInput } from '@app/input/retrieve-coupons.input'
import { RetrieveCouponsOutput } from '@app/output/retrieve-coupons.output'
import { In, Repository } from 'typeorm'
import CouponEntity from '@app/entity/coupon.entity'
import { ValidateService } from '@app/service/validate.service'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class RetrieveCoupons {
  constructor(
    @InjectRepository(CouponEntity) private readonly couponEntity: Repository<CouponEntity>,
    private readonly validateService: ValidateService
  ) {}

  async handle(input: RetrieveCouponsInput): Promise<RetrieveCouponsOutput> {
    const inputParsed = await this.validateService.validateAndTransformInput(RetrieveCouponsInput, input)

    const coupons = await this.couponEntity.find({ skip: (inputParsed.page - 1) * inputParsed.limit, take: inputParsed.limit })
    const total = await this.couponEntity.count()
    const currentPage = inputParsed.page
    return Object.assign(new RetrieveCouponsOutput(), {
      total,
      currentPage,
      coupons: coupons.map(coupon => coupon.code)
    })
  }
}
