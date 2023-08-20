import { Injectable } from '@nestjs/common'

import { AnswerBonusQuestionInput } from '@app/input/answer-bonus-question.input'
import { AnswerBonusQuestionOutput } from '@app/output/answer-bonus-question.output'

@Injectable()
export class AnswerBonusQuestion {
  handle(input: AnswerBonusQuestionInput): Promise<AnswerBonusQuestionOutput> {
    return Promise.resolve({})
  }
}
