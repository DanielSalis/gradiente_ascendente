import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { PartnerKeyGuard } from '@app/guards/partner-key.guard'
import { CreateCoupon } from '@app/usecase/create-coupon'
import { CreateCouponInput } from '@app/input/create-coupon.input'
import { CreateCouponOutput } from '@app/output/create-coupon.output'

@ApiTags('Business')
@Controller('/business/coupons')
export class CreateCouponAction {
  constructor(private readonly usecase: CreateCoupon) {}
  @ApiOperation({ operationId: 'CreateCoupon', summary: 'Create coupon endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    description: 'Success response'
  })
  @Post()
  // @UseGuards(PartnerKeyGuard)
  action(@Body() input: CreateCouponInput): Promise<CreateCouponOutput> {
    return this.usecase.handle(input)
  }
}
