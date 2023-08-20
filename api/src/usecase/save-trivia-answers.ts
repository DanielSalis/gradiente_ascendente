import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { SaveTriviaAnswersInput } from '@app/input/save-trivia-answers.input'
import { SaveTriviaAnswersOutput } from '@app/output/save-trivia-answers.output'
import UserTriviaConfigEntity from '@app/entity/user-trivia-config.entity'
import TriviaHistoryEntity from '@app/entity/trivia-history.entity'
import WalletEntity from '@app/entity/wallet.entity'

@Injectable()
export class SaveTriviaAnswers {
  constructor(
    @InjectRepository(TriviaHistoryEntity)
    private readonly triviaHistoryRepository: Repository<TriviaHistoryEntity>,
    @InjectRepository(UserTriviaConfigEntity)
    private readonly triviaConfigRepository: Repository<UserTriviaConfigEntity>,
    @InjectRepository(WalletEntity)
    private readonly walletRepository: Repository<WalletEntity>
  ) {}

  async handle(input: SaveTriviaAnswersInput): Promise<SaveTriviaAnswersOutput> {
    let rightAnswers = 0

    input.triviaGenerated.forEach((questionData) => {
      const answerFound = input.triviaAnswers.find((answer) => answer.id === questionData.id)
      if (answerFound.optionId === questionData.correctOptionId) {
        rightAnswers++
      }
    })

    const triviaConfig = await this.triviaConfigRepository.findOne({ where: { user: { id: input.userId } } })
    const pointsEarned = rightAnswers * triviaConfig.questionPointsToEarn
    const xpEarned = rightAnswers * triviaConfig.questionXpToEarn

    await this.triviaHistoryRepository.save(
      Object.assign(new TriviaHistoryEntity(), {
        triviaGenerated: input.triviaGenerated,
        answers: input.triviaAnswers,
        score: pointsEarned,
        user: { id: input.userId }
      })
    )

    const wallet = await this.walletRepository.findOne({ where: { person: { id: input.userId } } })

    wallet.points += pointsEarned
    wallet.currenExperiencePoints += xpEarned
    if (wallet.currenExperiencePoints / wallet.currentLevel >= triviaConfig.triviasToLevelUp * 3 * triviaConfig.questionXpToEarn) {
      wallet.currentLevel++
    }

    await this.walletRepository.save(wallet)

    return {}
  }
}
