import { ApiTags, ApiOperation, ApiBadRequestResponse, ApiResponse } from '@nestjs/swagger'
import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common'

import { Login } from '@app/usecase/login'
import { LoginOutput } from '@app/output/login.output'
import { LoginInput } from '@app/input/login.input'
import { LocalAuthGuard } from '@app/guards/local-auth.guard'

@ApiTags('Auth')
@Controller('/login')
export class LoginAction {
  constructor(private readonly usecase: Login) {}
  @ApiOperation({ operationId: 'Auth', summary: 'Log in user' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: LoginOutput,
    description: 'Success response'
  })
  @UseGuards(LocalAuthGuard)
  @Post()
  action(@Body() input: LoginInput): Promise<LoginOutput> {
    return this.usecase.handle(input)
  }
}
