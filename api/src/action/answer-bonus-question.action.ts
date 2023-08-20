import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { AnswerBonusQuestion } from '@app/usecase/answer-bonus-question'
import { AnswerBonusQuestionInput } from '@app/input/answer-bonus-question.input'
import { AnswerBonusQuestionOutput } from '@app/output/answer-bonus-question.output'

@ApiTags('Trivia')
@Controller('/trivia/answer/bonus-question')
export class AnswerBonusQuestionAction {
  constructor(private readonly usecase: AnswerBonusQuestion) {}

  @ApiOperation({ operationId: 'AnswerBonusQuestion', summary: 'Answer Bonus Question endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    description: 'Success response'
  })
  @Post()
  // @AuthGuard()
  action(@Body() input: AnswerBonusQuestionInput): Promise<AnswerBonusQuestionOutput> {
    return this.usecase.handle(input)
  }
}
