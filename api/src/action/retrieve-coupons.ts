import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Controller, Get, Query } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { RetrieveCoupons } from '@app/usecase/retrieve-coupons'
import { RetrieveCouponsInput } from '@app/input/retrieve-coupons.input'
import { RetrieveCouponsOutput } from '@app/output/retrieve-coupons.output'

@ApiTags('Coupons')
@Controller('/coupon')
export class RetrieveCouponsAction {
  constructor(private readonly usecase: RetrieveCoupons) {}
  @ApiOperation({ operationId: 'RetrieveCoupons', summary: 'Retrieve Coupons endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    description: 'Success response'
  })
  @Get()
  // @AuthGuard()
  action(@Query() input: RetrieveCouponsInput): Promise<RetrieveCouponsOutput> {
    return this.usecase.handle(input)
  }
}
