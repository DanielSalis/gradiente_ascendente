import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { PartnerKeyGuard } from '@app/guards/partner-key.guard'
import { ExportLeads } from '@app/usecase/export-leads'
import { ExportLeadsOutput } from '@app/output/export-leads.output'
import { ExportLeadsInput } from '@app/input/export-leads.input'

@ApiTags('Business')
@Controller('/business/leads/export')
export class ExportLeadsAction {
  constructor(private readonly usecase: ExportLeads) {}
  @ApiOperation({ operationId: 'ExportLead', summary: 'Export Leads endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    type: ExportLeadsOutput,
    description: 'Success response'
  })
  @Post()
  // @UseGuards(PartnerKeyGuard)
  action(@Body() input: ExportLeadsInput): Promise<ExportLeadsOutput> {
    return this.usecase.handle(input)
  }
}
