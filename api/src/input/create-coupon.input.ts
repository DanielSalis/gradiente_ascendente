import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateCouponInput {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '' })
  code: string

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: '' })
  quantity: number

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: '' })
  points: number

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: '' })
  expirationDays: number

  @IsNotEmpty()
  @IsString()
  @ApiHideProperty()
  partnerId: string
}
