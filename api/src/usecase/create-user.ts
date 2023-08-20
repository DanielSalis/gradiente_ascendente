import { Injectable } from '@nestjs/common'

import { CreateUserInput } from '@app/input/create-user.input'
import { CreateUserOutput } from '@app/output/create-user.output'

@Injectable()
export class CreateUser {
  handle(input: CreateUserInput): Promise<CreateUserOutput> {
    return Promise.resolve(<CreateUserOutput>{})
  }
}
