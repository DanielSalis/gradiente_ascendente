import { ApiProperty } from '@nestjs/swagger'

export class RedeemCouponOutput {
  @ApiProperty({ description: '' })
  couponCode: string
}
