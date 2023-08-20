import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsString } from 'class-validator'

export class CreatePartnerInput {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '' })
  name: string

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ description: '' })
  businessCategories: string[]
}
