import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class RetrieveCouponsInput {
  @IsNotEmpty()
  @ApiProperty({ description: 'Page number', example: 1 })
  page: number

  @IsNotEmpty()
  @ApiProperty({ description: 'Limit per page', example: 10 })
  limit: number
}
