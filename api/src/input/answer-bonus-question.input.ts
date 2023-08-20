import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class AnswerBonusQuestionInput {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({ description: '' })
  questionId: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '' })
  answer: string

  @IsNotEmpty()
  @IsString()
  @ApiHideProperty()
  userId: string
}
