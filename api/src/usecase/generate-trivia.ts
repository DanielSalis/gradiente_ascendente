import { Injectable } from '@nestjs/common'

import { GenerateTriviaInput } from '@app/input/generate-trivia.input'
import { GenerateTriviaOutput } from '@app/output/generate-trivia.output'

@Injectable()
export class GenerateTrivia {
  handle(input: GenerateTriviaInput): Promise<GenerateTriviaOutput> {
    return Promise.resolve(<GenerateTriviaOutput>{})
  }
}
