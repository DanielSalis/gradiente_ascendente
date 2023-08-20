import { ApiProperty } from '@nestjs/swagger'

export class CreateUserOutput {
  @ApiProperty({ description: 'User identifier' })
  id: string

  @ApiProperty({ description: 'User email' })
  login: string

  @ApiProperty({ description: 'User created at' })
  createdAt: Date
}
