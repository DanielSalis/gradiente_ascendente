import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { RedeemCoupon } from '@app/usecase/redeem-coupon'
import { RedeemCouponInput } from '@app/input/redeem-coupon.input'
import { RedeemCouponOutput } from '@app/output/redeem-coupon.output'

@ApiTags('Coupons')
@Controller('/coupon/redeem')
export class RedeemCouponAction {
  constructor(private readonly usecase: RedeemCoupon) {}
  @ApiOperation({ operationId: 'RedeemCoupon', summary: 'Redeem Coupon endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    description: 'Success response'
  })
  @Post()
  @AuthGuard()
  action(@Body() input: RedeemCouponInput): Promise<RedeemCouponOutput> {
    return this.usecase.handle(input)
  }
}
