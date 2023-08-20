import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Body, Controller, Post, UseGuards } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { GenerateResumeInput } from '@app/input/generate-resume.input'
import { GenerateResumeOutput } from '@app/output/generate-resume.output'
import { GenerateResume } from '@app/usecase/generate-resume'

@ApiTags('Content')
@Controller('/content/resume')
export class GenerateResumeAction {
  constructor(private readonly usecase: GenerateResume) {}
  @ApiOperation({ operationId: 'GenerateResume', summary: 'Generate Resume endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    description: 'Success response'
  })
  @Post()
  // @UseGuards(JwtAuthGuard)
  action(@Body() input: GenerateResumeInput): Promise<GenerateResumeOutput> {
    return this.usecase.handle(input)
  }
}
