import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { RetrieveUserInfoInput } from '@app/input/retrieve-user-info.input'
import { RetrieveUserInfoOutput } from '@app/output/retrieve-user-info.output'
import UserEntity from '@app/entity/user.entity'
import WalletEntity from '@app/entity/wallet.entity'
import UserTriviaConfigEntity from '@app/entity/user-trivia-config.entity'

@Injectable()
export class RetrieveUserInfo {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(UserEntity)
    private readonly walletRepository: Repository<WalletEntity>,
    @InjectRepository(UserTriviaConfigEntity) private readonly userTriviaRepository: Repository<UserTriviaConfigEntity>
  ) {}

  async handle(input: RetrieveUserInfoInput): Promise<RetrieveUserInfoOutput> {
    const userWithPerson = await this.userRepository.findOne({ where: { id: input.userId }, relations: ['person'] })

    const wallet = await this.walletRepository.findOne({ where: { person: { id: userWithPerson.person.id } } })
    const triviaConfig = await this.userTriviaRepository.findOne({ where: { user: { id: input.userId } } })

    // 3 numero de questions por trivia / colocar em config
    const nextLevelExperiencePoints = triviaConfig.triviasToLevelUp * 3 * triviaConfig.questionXpToEarn

    return Object.assign(new RetrieveUserInfoOutput(), userWithPerson, wallet, { nextLevelExperiencePoints })
  }
}
