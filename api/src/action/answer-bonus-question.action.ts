import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common'
// import { AuthGuard } from '@nestjs/passport'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { AnswerBonusQuestion } from '@app/usecase/answer-bonus-question'
import { AnswerBonusQuestionInput } from '@app/input/answer-bonus-question.input'
import { AnswerBonusQuestionOutput } from '@app/output/answer-bonus-question.output'
import { JwtGuard } from '@app/guards/jwt-auth.guard'

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
    type: AnswerBonusQuestionOutput,
    description: 'Success response'
  })
  @Post()
  @UseGuards(JwtGuard)
  action(@Body() input: AnswerBonusQuestionInput, @Request() request): Promise<AnswerBonusQuestionOutput> {
    return this.usecase.handle({ ...input, userId: request.user.id })
  }
}
