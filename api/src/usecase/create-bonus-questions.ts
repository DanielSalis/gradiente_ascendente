import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateBonusQuestionsInput } from '@app/input/create-bonus-questions.input'
import { CreateBonusQuestionsOutput } from '@app/output/create-bonus-questions.output'
import QuestionBonusEntity from '@app/entity/question-bonus.entity'
import PartnerEntity from '@app/entity/partner.entity'

@Injectable()
export class CreateBonusQuestions {
  constructor(
    @InjectRepository(QuestionBonusEntity) private readonly questionBonusRepository: Repository<QuestionBonusEntity>,
    @InjectRepository(PartnerEntity) private readonly partnerRepository: Repository<PartnerEntity>
  ) {}

  async handle(input: CreateBonusQuestionsInput): Promise<CreateBonusQuestionsOutput> {
    for await (const question of input) {
      const partner = await this.partnerRepository.findOne({ where: { id: question.partnerId } })

      if (!partner) {
        throw new Error('Partner not found')
      }

      await this.questionBonusRepository.save({
        title: question.title
      })
    }

    return {}
  }
}
