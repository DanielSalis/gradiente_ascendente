import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import OpenAI from 'openai-api'

@Injectable()
export class AiAdapter {
  private readonly aiInstance: OpenAI
  constructor(private readonly configService: ConfigService) {
    this.aiInstance = new OpenAI(configService.get('OPENAI_API_KEY'))
  }

  /*
    Example of a completion success response:

    {
      id: 'some-long-id',
      object: 'text_completion',
      created: 1616791508,
      model: 'davinci:2020-05-03',
      choices: [
          {
            text: " predicted text...",
            index: 0,
            logprobs: null,
            finish_reason: 'length'
          }
      ]
    }
  */
  public async completion(prompt: string): Promise<unknown> {
    try {
      const gptResponse = await this.aiInstance.complete({
        engine: 'davinci',
        prompt,
        maxTokens: 5,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n', 'testing']
      })
      return gptResponse
    } catch (error) {
      console.error(error)
    }
  }
}
