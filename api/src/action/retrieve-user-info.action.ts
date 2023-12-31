import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Controller, Post, Request, UseGuards } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { JwtAuthGuard } from '@app/guards/jwt-auth.guard'
import { RetrieveUserInfo } from '@app/usecase/retrieve-user-info'
import { RetrieveUserInfoOutput } from '@app/output/retrieve-user-info.output'
import { JwtGuard } from '@app/guards/jwt-auth.guard'

@ApiTags('User')
@Controller('/user')
export class RetrieveUserInfoAction {
  constructor(private readonly usecase: RetrieveUserInfo) {}
  @ApiOperation({ operationId: 'RetrieveUserInfo', summary: 'Retrieve user info endpoint' })
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    type: RetrieveUserInfoOutput,
    description: 'Success response'
  })
  @Post()
  @UseGuards(JwtGuard)
  action(@Request() { user: { id: userId } }: { user: { id: string } }): Promise<RetrieveUserInfoOutput> {
    return this.usecase.handle({ userId })
  }
}
