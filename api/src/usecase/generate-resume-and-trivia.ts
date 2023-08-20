import { Injectable } from '@nestjs/common'

import { GenerateResumeInput } from '@app/input/generate-resume.input'
import { GenerateResumeOutput } from '@app/output/generate-resume.output'
import { AiAdapter } from '@app/adapter/ai.adapter'
import { promptGenerateResumeAndTriviaTemplate } from '@app/adapter/templates/prompt-generate-resume-and-trivia.template'
import { ErrorService } from '@app/service/error.service'
import { ValidateService } from '@app/service/validate.service'
import ErrorType from '@app/constant/error.enum'

@Injectable()
export class GenerateResumeAndTrivia {
  constructor(
    private readonly aiAdapter: AiAdapter,
    private readonly errorService: ErrorService,
    private readonly validateService: ValidateService
  ) {}

  async handle(input: GenerateResumeInput): Promise<GenerateResumeOutput> {
    const inputParsed = await this.validateService.validateAndTransformInput(GenerateResumeInput, input)
    let contentGenerated: Record<string, unknown>
    try {
      const content = await this.getContent(inputParsed.contentUrl)
      contentGenerated = await this.aiAdapter.completion(promptGenerateResumeAndTriviaTemplate(content))
    } catch (error: unknown) {
      this.errorService.throw(['Invalid Content URL'], ErrorType.UNPROCESSABLE_ENTITY)
    }

    return Object.assign(new GenerateResumeOutput(), {
      resume: contentGenerated.summary,
      trivia: contentGenerated.questions
    })
  }

  private async getContent(contentUrl: string): Promise<string> {
    const response = await fetch(contentUrl)

    if (!response.ok) {
      this.errorService.throw(['Invalid Content URL'], ErrorType.UNPROCESSABLE_ENTITY)
    }

    const text = await response.text()
    const hasMatch = text.match(/(?<=<body>)([\s\S]*?)(?=<\/body>)/g)
    let contentToSlice = text
    if (hasMatch) {
      contentToSlice = hasMatch[0].replace(/<[^>]+>/g, '')
    }
    return contentToSlice.slice(0, 2048)
  }
}
