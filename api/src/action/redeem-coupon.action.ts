import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { RedeemCoupon } from '@app/usecase/redeem-coupon'
import { RedeemCouponInput } from '@app/input/redeem-coupon.input'
import { RedeemCouponOutput } from '@app/output/redeem-coupon.output'
import { JwtGuard } from '@app/guards/jwt-auth.guard'

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
    type: RedeemCouponOutput,
    description: 'Success response'
  })
  @Post()
  @UseGuards(JwtGuard)
  action(@Body() input: RedeemCouponInput, @Request() request): Promise<RedeemCouponOutput> {
    return this.usecase.handle({ ...input, userId: request.user.id })
  }
}
