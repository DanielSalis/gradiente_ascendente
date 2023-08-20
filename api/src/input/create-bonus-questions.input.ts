import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

class BonusQuestion {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '' })
  title: string
}

export class CreateBonusQuestionsInput extends Array<BonusQuestion> {}
