import { Injectable } from '@nestjs/common'

import { LoginInput } from '@app/input/login.input'
import { LoginOutput } from '@app/output/login.output'

@Injectable()
export class Login {
  async handle(input: LoginInput): Promise<LoginOutput> {
    return Promise.resolve(<LoginOutput>{})
  }
}
