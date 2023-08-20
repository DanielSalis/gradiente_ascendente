import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateBonusQuestionsInput } from '@app/input/create-bonus-questions.input'
import { CreateBonusQuestionsOutput } from '@app/output/create-bonus-questions.output'
import QuestionBonusEntity from '@app/entity/question-bonus.entity'
import PartnerEntity from '@app/entity/partner.entity'
import { ErrorService } from '@app/service/error.service'
import { ValidateService } from '@app/service/validate.service'
import ErrorType from '@app/constant/error.enum'

@Injectable()
export class CreateBonusQuestions {
  constructor(
    @InjectRepository(QuestionBonusEntity) private readonly questionBonusRepository: Repository<QuestionBonusEntity>,
    @InjectRepository(PartnerEntity) private readonly partnerRepository: Repository<PartnerEntity>,
    private readonly errorService: ErrorService,
    private readonly validateService: ValidateService
  ) {}

  async handle(input: CreateBonusQuestionsInput): Promise<CreateBonusQuestionsOutput> {
    const inputParsed = await this.validateService.validateAndTransformInput(CreateBonusQuestionsInput, input)

    for await (const question of inputParsed) {
      const partner = await this.partnerRepository.findOne({ where: { id: question.partnerId } })

      if (!partner) {
        this.errorService.throw(['Partner does not exist'], ErrorType.UNPROCESSABLE_ENTITY)
      }

      await this.questionBonusRepository.save({
        title: question.title
      })
    }

    return {}
  }
}
