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
    const contentGenerated = await this.aiAdapter.completion(promptGenerateResumeAndTriviaTemplate(content))
    console.log(contentGenerated)
    return Promise.resolve(<GenerateResumeOutput>{})
  }

  private async getContent(contentUrl: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      try {
        let content = ''
        http.request(contentUrl, (res) => {
          const data = []

          res.on('data', (_) => data.push(_))
          res.on('end', () => {
            const body = Buffer.concat(data).toString()
            content = body.match(/(?<=<body>)([\s\S]*?)(?=<\/body>)/g, '')[0].replace(/<[^>]+>/g, '')
          })
        })
        resolve(content)
      } catch (error) {
        reject(error)
      }
    })
  }
}
