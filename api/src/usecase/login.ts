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

@Injectable()
export class Login {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
    private readonly errorService: ErrorService,
    private readonly validateService: ValidateService
  ) {}

  async handle(input: LoginInput): Promise<LoginOutput> {
    const user = await this.userRepository.findOne({ where: { login: input.email } })

    if (!user) {
      throw new Error('User not found')
    }

    if (!bcrypt.compareSync(input.password, user.passwordHash)) {
      throw new Error('Invalid password')
    }

    const token = this.jwtService.sign({ userId: user.id })

    return Object.assign(new LoginOutput(), { accessToken: token })
  }
}
