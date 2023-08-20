import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '' })
  password: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '' })
  firstName: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '' })
  lastName: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({ description: '' })
  email: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '' })
  phone: string

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ description: '' })
  birthDate: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '' })
  document: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({ description: '' })
  token?: string
}
