import { Injectable } from '@nestjs/common'

import { CreateBonusQuestionsInput } from '@app/input/create-bonus-questions.input'
import { CreateBonusQuestionsOutput } from '@app/output/create-bonus-questions.output'

@Injectable()
export class CreateBonusQuestions {
  handle(input: CreateBonusQuestionsInput): Promise<CreateBonusQuestionsOutput> {
    return Promise.resolve({})
  }
}
