import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class LoginInput {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'User email' })
  email: string

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ description: 'User password' })
  password?: string
}
