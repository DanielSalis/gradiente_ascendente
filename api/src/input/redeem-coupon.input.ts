import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class RedeemCouponInput {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '' })
  couponCode: string

  @IsNotEmpty()
  @IsString()
  @ApiHideProperty()
  userId: string
}
