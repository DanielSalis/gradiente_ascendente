import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { SaveTriviaAnswersInput } from '@app/input/save-trivia-answers.input'
import { SaveTriviaAnswers } from '@app/usecase/save-trivia-answers'
import { SaveTriviaAnswersOutput } from '@app/output/save-trivia-answers.output'

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
    description: 'Success response'
  })
  @Post()
  @AuthGuard()
  action(@Body() input: SaveTriviaAnswersInput): Promise<SaveTriviaAnswersOutput> {
    return this.usecase.handle(input)
  }
}
