import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { GenerateTrivia } from '@app/usecase/generate-trivia'
import { GenerateTriviaInput } from '@app/input/generate-trivia.input'
import { GenerateTriviaOutput } from '@app/output/generate-trivia.output'

@ApiTags('Trivia')
@Controller('/trivia')
export class GenerateTriviaAction {
  constructor(private readonly usecase: GenerateTrivia) {}
  @ApiOperation({ operationId: 'GenerateTrivia', summary: 'Generate Trivia endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    description: 'Success response'
  })
  @Post()
  // @UseGuards(JwtAuthGuard)
  action(@Body() input: GenerateTriviaInput): Promise<GenerateTriviaOutput> {
    return this.usecase.handle(input)
  }
}
