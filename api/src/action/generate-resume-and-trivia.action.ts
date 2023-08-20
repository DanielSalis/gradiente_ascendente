import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post, UseGuards } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { GenerateResumeInput } from '@app/input/generate-resume.input'
import { GenerateResumeOutput } from '@app/output/generate-resume.output'
import { GenerateResumeAndTrivia } from '@app/usecase/generate-resume-and-trivia'

@ApiTags('Content')
@Controller('/content/resume-and-trivia')
export class GenerateResumeAndTriviaAction {
  constructor(private readonly usecase: GenerateResumeAndTrivia) {}
  @ApiOperation({ operationId: 'GenerateResumeAndTrivia', summary: 'Generate resume and trivia endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    description: 'Success response'
  })
  @Post()
  // // @AuthGuard()
  action(@Body() input: GenerateResumeInput): Promise<GenerateResumeOutput> {
    return this.usecase.handle(input)
  }
}
