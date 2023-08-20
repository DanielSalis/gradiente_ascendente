import { Injectable } from '@nestjs/common'

import { CreateCouponInput } from '@app/input/create-coupon.input'
import { CreateCouponOutput } from '@app/output/create-coupon.output'

@Injectable()
export class CreateCoupon {
  handle(input: CreateCouponInput): Promise<CreateCouponOutput> {
    return Promise.resolve(<CreateCouponOutput>{})
  }
}
