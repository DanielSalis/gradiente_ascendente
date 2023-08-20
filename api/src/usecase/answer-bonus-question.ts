import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AnswerBonusQuestionInput } from '@app/input/answer-bonus-question.input'
import { AnswerBonusQuestionOutput } from '@app/output/answer-bonus-question.output'
import QuestionBonusAnswerEntity from '@app/entity/question-bonus-answer.entity'
import QuestionBonusEntity from '@app/entity/question-bonus.entity'
import UserEntity from '@app/entity/user.entity'
import { ErrorService } from '@app/service/error.service'
import { ValidateService } from '@app/service/validate.service'

@Injectable()
export class AnswerBonusQuestion {
  constructor(
    @InjectRepository(QuestionBonusAnswerEntity) private readonly questionBonusAnswerRepository: Repository<QuestionBonusAnswerEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(QuestionBonusEntity) private readonly questionBonusRepository: Repository<QuestionBonusEntity>,
    private readonly errorService: ErrorService,
    private readonly validateService: ValidateService
  ) {}
  async handle(input: AnswerBonusQuestionInput): Promise<AnswerBonusQuestionOutput> {
    const questionBonus = await this.questionBonusRepository.findOne({ where: { id: input.questionId } })

    if (!questionBonus) {
      throw new Error('Question not found')
    }

    const userWithPerson = await this.userRepository.findOne({ where: { id: input.userId }, relations: ['person'] })

    if (!userWithPerson.person) {
      throw new Error('Person not found')
    }

    await this.questionBonusAnswerRepository.save(
      Object.assign(new QuestionBonusAnswerEntity(), {
        value: input.answer,

        questionBonus,
        person: userWithPerson.person
      })
    )

    return Promise.resolve({})
  }
}
