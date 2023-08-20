import { Injectable } from '@nestjs/common'

import { SaveTriviaAnswersInput } from '@app/input/save-trivia-answers.input'
import { SaveTriviaAnswersOutput } from '@app/output/save-trivia-answers.output'

@Injectable()
export class SaveTriviaAnswers {
  handle(input: SaveTriviaAnswersInput): Promise<SaveTriviaAnswersOutput> {
    return Promise.resolve(<SaveTriviaAnswersOutput>{})
  }
}
