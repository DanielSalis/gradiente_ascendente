import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { GenerateResumeInput } from '@app/input/generate-resume.input'
import { GenerateResumeOutput } from '@app/output/generate-resume.output'
import { GenerateResumeAndTrivia } from '@app/usecase/generate-resume-and-trivia'
import { JwtGuard } from '@app/guards/jwt-auth.guard'

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
    type: GenerateResumeOutput,
    description: 'Success response'
  })
  @Post()
  // @UseGuards(JwtGuard)
  action(@Body() input: GenerateResumeInput): Promise<GenerateResumeOutput> {
    return this.usecase.handle({ ...input })
  }
}
