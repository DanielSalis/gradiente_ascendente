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
  public async completion(prompt: string): Promise<Record<string, unknown>> {
    try {
      const gptInstace = this.getInstance()
      const gptResponse = await gptInstace.completions.create({
        model: 'text-davinci-003',
        prompt,
        temperature: 0.0,
        max_tokens: 2048,
        n: 1
      })
      return this.hadleResult(gptResponse.choices[0].text)
    } catch (error) {
      console.error(error)
    }
  }

  private hadleResult(result: string): Record<string, unknown> {
    try {
      return JSON.parse(result.replace('\n', ''))
    } catch (error) {
      console.error(error)
      throw new Error('Error on parse result')
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
