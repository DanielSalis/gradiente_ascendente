import { ApiTags, ApiOperation, ApiBadRequestResponse, ApiResponse } from '@nestjs/swagger'
import { Body, Controller, Post } from '@nestjs/common'

import { CreateUserInput } from '@app/input/create-user.input'
import { CreateUser } from '@app/usecase/create-user'
import { CreateUserOutput } from '@app/output/create-user.output'

@ApiTags('User')
@Controller('/create-user')
export class CreateUserAction {
  constructor(private readonly usecase: CreateUser) {}
  @ApiOperation({ operationId: 'CreateUser', summary: 'Create user' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiResponse({
    type: CreateUserOutput,
    description: 'Success response'
  })
  @Post()
  action(@Body() input: CreateUserInput): Promise<CreateUserOutput> {
    return this.usecase.handle(input)
  }
}
