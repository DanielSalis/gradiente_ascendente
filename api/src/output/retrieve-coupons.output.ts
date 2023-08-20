import { ApiProperty } from '@nestjs/swagger'

export class RetrieveCouponsOutput {
  @ApiProperty({ description: '' })
  total: number

  @ApiProperty({ description: '' })
  currentPage: number

  @ApiProperty({ description: '' })
  coupons: string[]
}
