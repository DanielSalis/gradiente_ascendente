import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
import { PartnerKeyGuard } from '@app/guards/partner-key.guard'
import { CreateBonusQuestions } from '@app/usecase/create-bonus-questions'
import { CreateBonusQuestionsInput } from '@app/input/create-bonus-questions.input'
import { CreateBonusQuestionsOutput } from '@app/output/create-bonus-questions.output'

@ApiTags('Business')
@Controller('/business/trivia/bonus-question')
export class CreateBonusQuestionsAction {
  constructor(private readonly usecase: CreateBonusQuestions) {}
  @ApiOperation({ operationId: 'CreateBonusQuestions', summary: 'Create bonus questions endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    description: 'Success response'
  })
  @Post()
  // @UseGuards(PartnerKeyGuard)
  action(@Body() input: CreateBonusQuestionsInput): Promise<CreateBonusQuestionsOutput> {
    return this.usecase.handle(input)
  }
}
