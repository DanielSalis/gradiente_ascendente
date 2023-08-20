import { Injectable } from '@nestjs/common'

import { RedeemCouponInput } from '@app/input/redeem-coupon.input'
import { RedeemCouponOutput } from '@app/output/redeem-coupon.output'

@Injectable()
export class RedeemCoupon {
  handle(input: RedeemCouponInput): Promise<RedeemCouponOutput> {
    return Promise.resolve(<RedeemCouponOutput>{})
  }
}
