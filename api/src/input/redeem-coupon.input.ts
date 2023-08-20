import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class RedeemCouponInput {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '' })
  couponId: string
}
