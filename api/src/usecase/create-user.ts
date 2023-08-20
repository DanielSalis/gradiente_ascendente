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
import { ValidateService } from '@app/service/validate.service'
import { ErrorService } from '@app/service/error.service'
import ErrorType from '@app/constant/error.enum'

@Injectable()
export class CreateUser {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(WalletEntity)
    private readonly walletRepository: Repository<WalletEntity>,
    @InjectRepository(UserTriviaConfigEntity) private readonly triviaConfigRepository: Repository<UserTriviaConfigEntity>,
    private readonly errorService: ErrorService,
    private readonly validateService: ValidateService
  ) {}

  async handle(input: CreateUserInput): Promise<CreateUserOutput> {
    const inputParsed = await this.validateService.validateAndTransformInput(CreateUserInput, input)

    const userExists = await this.userRepository.findOne({ where: { login: inputParsed.email } })

    if (userExists) {
      this.errorService.throw(['User already exists'], ErrorType.UNPROCESSABLE_ENTITY)
    }

    const personExists = await this.personRepository.findOne({ where: { document: inputParsed.document } })

    if (personExists) {
      this.errorService.throw(['Person already exists'], ErrorType.UNPROCESSABLE_ENTITY)
    }

    // melhoria colocar isso em transactions
    const person = await this.personRepository.save(
      Object.assign(new PersonEntity(), {
        firstName: inputParsed.firstName,
        lastName: inputParsed.lastName,
        document: inputParsed.document,
        birthDate: inputParsed.birthDate,
        email: inputParsed.email,
        phone: inputParsed.phone
      })
    )

    const user = await this.userRepository.save(
      Object.assign(new UserEntity(), {
        login: inputParsed.email,
        passwordHash: bcrypt.hashSync(inputParsed.password, 10),
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
