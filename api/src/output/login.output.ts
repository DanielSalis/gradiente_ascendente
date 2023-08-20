import { ApiProperty } from '@nestjs/swagger'

export class LoginOutput {
  @ApiProperty({ description: 'User token generated' })
  accessToken: string
}
