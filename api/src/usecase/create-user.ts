import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'

import { CreateUserInput } from '@app/input/create-user.input'
import { CreateUserOutput } from '@app/output/create-user.output'
import PersonEntity from '@app/entity/person.entity'
import UserEntity from '@app/entity/user.entity'
import WalletEntity from '@app/entity/wallet.entity'
import UserTriviaConfigEntity from '@app/entity/user-trivia-config.entity'

@Injectable()
export class CreateUser {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(WalletEntity)
    private readonly walletRepository: Repository<WalletEntity>,
    @InjectRepository(UserTriviaConfigEntity) private readonly triviaConfigRepository: Repository<UserTriviaConfigEntity>
  ) {}

  async handle(input: CreateUserInput): Promise<CreateUserOutput> {
    // melhoria colocar isso em transactions
    const person = await this.personRepository.save(
      Object.assign(new PersonEntity(), {
        firstName: input.firstName,
        lastName: input.lastName,
        document: input.document,
        birthDate: input.birthDate,
        email: input.email,
        phone: input.phone
      })
    )

    const user = await this.userRepository.save(
      Object.assign(new UserEntity(), {
        login: input.email,
        passwordHash: bcrypt.hashSync(input.password, 10),
        active: true,
        person: person
      })
    )

    await this.walletRepository.save(
      Object.assign(new WalletEntity(), {
        points: 0,
        currenExperiencePoints: 0,
        currentLevel: 1,
        coupons: [],
        person
      })
    )

    await this.triviaConfigRepository.save(
      Object.assign(new UserTriviaConfigEntity(), {
        user: { id: user.id },
        questionPointsToEarn: 10,
        questionXpToEarn: 10,
        triviasToLevelUp: 5
      })
    )

    return Object.assign(new CreateUserOutput(), user)
  }
}
