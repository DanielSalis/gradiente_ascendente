import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { SaveTriviaAnswersInput } from '@app/input/save-trivia-answers.input'
import { SaveTriviaAnswers } from '@app/usecase/save-trivia-answers'
import { SaveTriviaAnswersOutput } from '@app/output/save-trivia-answers.output'
import { JwtGuard } from '@app/guards/jwt-auth.guard'

@ApiTags('Save Trivia Answers')
@Controller('/trivia/answer')
export class SaveTriviaAnswersAction {
  constructor(private readonly usecase: SaveTriviaAnswers) {}
  @ApiOperation({ operationId: 'SaveTriviaAnswers', summary: 'Save Trivia Answers endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    type: SaveTriviaAnswersOutput,
    description: 'Success response'
  })
  @Post()
  @UseGuards(JwtGuard)
  action(@Body() input: SaveTriviaAnswersInput, @Request() request): Promise<SaveTriviaAnswersOutput> {
    return this.usecase.handle({ ...input, userId: request.user.id })
  }
}
