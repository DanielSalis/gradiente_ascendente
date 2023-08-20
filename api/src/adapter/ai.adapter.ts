import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import OpenAI from 'openai'

@Injectable()
export class AiAdapter {
  private aiInstance: OpenAI
  constructor(private readonly configService: ConfigService) {}

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
      const gptInstace = this.getInstance()
      const gptResponse = await gptInstace.completions.create({
        model: 'davinci',
        prompt,
        maxTokens: 2048,
        temperature: 0.0,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: null
      })
      return gptResponse
    } catch (error) {
      console.error(error)
    }
  }


  private getInstance(): OpenAI {
    if (this.aiInstance) {
      return this.aiInstance
    }

    this.aiInstance = new OpenAI(this.configService.get('OPENAI_API_KEY'))
    return this.aiInstance
  }
}
