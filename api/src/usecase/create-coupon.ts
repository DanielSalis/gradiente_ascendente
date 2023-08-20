import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateCouponInput } from '@app/input/create-coupon.input'
import { CreateCouponOutput } from '@app/output/create-coupon.output'
import CouponEntity from '@app/entity/coupon.entity'
import PartnerEntity from '@app/entity/partner.entity'
import { ValidateService } from '@app/service/validate.service'
import { ErrorService } from '@app/service/error.service'
import ErrorType from '@app/constant/error.enum'

@Injectable()
export class CreateCoupon {
  constructor(
    @InjectRepository(CouponEntity) private readonly couponEntity: Repository<CouponEntity>,
    @InjectRepository(PartnerEntity) private readonly partnerRepository: Repository<PartnerEntity>,
    private readonly errorService: ErrorService,
    private readonly validateService: ValidateService
  ) {}
  async handle(input: CreateCouponInput): Promise<CreateCouponOutput> {
    const inputParsed = await this.validateService.validateAndTransformInput(CreateCouponInput, input)
    const partner = await this.partnerRepository.findOne({ where: { id: inputParsed.partnerId } })

    if (!partner) {
      this.errorService.throw(['Partner does not exist'], ErrorType.UNPROCESSABLE_ENTITY)
    }

    await this.couponEntity.save(
      Object.assign(new CouponEntity(), {
        code: inputParsed.code,
        quantity: inputParsed.quantity,
        value: inputParsed.points,
        partner
      })
    )
    return {}
  }
}
