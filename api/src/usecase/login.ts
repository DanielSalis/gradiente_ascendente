import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import UserEntity from '@app/entity/user.entity'
import { LoginOutput } from '@app/output/login.output'
import { LoginInput } from '@app/input/login.input'
import { ErrorService } from '@app/service/error.service'
import { ValidateService } from '@app/service/validate.service'
import { ConfigService } from '@nestjs/config'
import ErrorType from '@app/constant/error.enum'
import PersonEntity from '@app/entity/person.entity'

@Injectable()
export class Login {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly errorService: ErrorService,
    private readonly validateService: ValidateService
  ) {}

  async handle(input: LoginInput): Promise<LoginOutput> {
    const inputParsed = await this.validateService.validateAndTransformInput(LoginInput, input)
    const userWithPerson = await this.userRepository.findOne({ where: { login: inputParsed.email } })

    if (!userWithPerson) {
      this.errorService.throw(['Invalid email'], ErrorType.UNPROCESSABLE_ENTITY)
    }

    if (!bcrypt.compareSync(inputParsed.password, userWithPerson.passwordHash)) {
      this.errorService.throw(['Invalid password'], ErrorType.UNPROCESSABLE_ENTITY)
    }

    const token = this.jwtService.sign({ id: userWithPerson.id, name: userWithPerson.person.firstName }, { secret: this.configService.get('JWT_SECRET') })

    return Object.assign(new LoginOutput(), { accessToken: token,  })
  }
}
