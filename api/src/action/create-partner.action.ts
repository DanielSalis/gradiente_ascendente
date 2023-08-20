import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { AdminKeyGuard } from '@app/guards/admin-key.guard'
import { CreatePartnerInput } from '@app/input/create-partner.input'
import { CreatePartnerOutput } from '@app/output/create-partner.output'
import { CreatePartner } from '@app/usecase/create-partner'

@ApiTags('Business')
@Controller('/business/partner')
export class CreatePartnerAction {
  constructor(private readonly usecase: CreatePartner) {}
  @ApiOperation({ operationId: 'CreatePartner', summary: 'Create partner endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    type: CreatePartnerOutput,
    description: 'Success response'
  })
  @Post()
  // @UseGuards(AdminKeyGuard)
  action(@Body() input: CreatePartnerInput): Promise<CreatePartnerOutput> {
    return this.usecase.handle(input)
  }
}
