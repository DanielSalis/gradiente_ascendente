import http from 'http'

import { Injectable } from '@nestjs/common'

import { GenerateResumeInput } from '@app/input/generate-resume.input'
import { GenerateResumeOutput } from '@app/output/generate-resume.output'
import { AiAdapter } from '@app/adapter/ai.adapter'
import { promptGenerateResumeAndTriviaTemplate } from '@app/adapter/templates/prompt-generate-resume-and-trivia.template'

@Injectable()
export class GenerateResumeAndTrivia {
  constructor(private readonly aiAdapter: AiAdapter) {}

  async handle(input: GenerateResumeInput): Promise<GenerateResumeOutput> {
    const content = await this.getContent(input.contentUrl)
    const contentGenerated = await this.aiAdapter.callOpenAIChatAPI(promptGenerateResumeAndTriviaTemplate(content))
    console.log(contentGenerated)
    return Promise.resolve(<GenerateResumeOutput>{})
  }

  private async getContent(contentUrl: string): Promise<string> {
    const response = await fetch(contentUrl)

    if (!response.ok) {
      throw new Error(`HTTP request failed with status: ${response.status}`)
    }

    const text = await response.text()
    const body = text.match(/(?<=<body>)([\s\S]*?)(?=<\/body>)/g)[0].replace(/<[^>]+>/g, '')
    return body
  }
}
