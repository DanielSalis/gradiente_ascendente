import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { SaveTriviaAnswersInput } from '@app/input/save-trivia-answers.input'
import { SaveTriviaAnswersOutput } from '@app/output/save-trivia-answers.output'
import UserTriviaConfigEntity from '@app/entity/user-trivia-config.entity'
import TriviaHistoryEntity from '@app/entity/trivia-history.entity'
import WalletEntity from '@app/entity/wallet.entity'
import { ErrorService } from '@app/service/error.service'
import { ValidateService } from '@app/service/validate.service'

@Injectable()
export class SaveTriviaAnswers {
  constructor(
    @InjectRepository(TriviaHistoryEntity)
    private readonly triviaHistoryRepository: Repository<TriviaHistoryEntity>,
    @InjectRepository(UserTriviaConfigEntity)
    private readonly triviaConfigRepository: Repository<UserTriviaConfigEntity>,
    @InjectRepository(WalletEntity)
    private readonly walletRepository: Repository<WalletEntity>,
    private readonly errorService: ErrorService,
    private readonly validateService: ValidateService
  ) {}

  async handle(input: SaveTriviaAnswersInput): Promise<SaveTriviaAnswersOutput> {
    const inputParsed = await this.validateService.validateAndTransformInput(SaveTriviaAnswersInput, input)
    let rightAnswers = 0

    inputParsed.triviaGenerated.forEach((questionData) => {
      const answerFound = inputParsed.triviaAnswers.find((answer) => answer.id === questionData.id)
      if (answerFound.optionId === questionData.correctOptionId) {
        rightAnswers++
      }
    })

    const triviaConfig = await this.triviaConfigRepository.findOne({ where: { user: { id: inputParsed.userId } } })
    const pointsEarned = rightAnswers * triviaConfig.questionPointsToEarn
    const xpEarned = rightAnswers * triviaConfig.questionXpToEarn

    await this.triviaHistoryRepository.save(
      Object.assign(new TriviaHistoryEntity(), {
        triviaGenerated: inputParsed.triviaGenerated,
        answers: inputParsed.triviaAnswers,
        score: pointsEarned,
        user: { id: inputParsed.userId }
      })
    )

    const wallet = await this.walletRepository.findOne({ where: { person: { id: inputParsed.userId } } })

    wallet.points += pointsEarned
    wallet.currenExperiencePoints += xpEarned
    if (wallet.currenExperiencePoints / wallet.currentLevel >= triviaConfig.triviasToLevelUp * 3 * triviaConfig.questionXpToEarn) {
      wallet.currentLevel++
    }

    await this.walletRepository.save(wallet)

    return {}
  }
}
