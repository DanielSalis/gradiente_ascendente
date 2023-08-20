import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'

class TriviaOption {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Option text' })
  text: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Option id', example: 'Option A' })
  id: string
}

class Trivia {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Trivia id', example: 'Trivia 1' })
  id: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Trivia title', example: 'Trivia 1' })
  title: string

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty({ description: 'Trivia options' })
  options: Array<TriviaOption>

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Trivia correct option id', example: 'Option A' })
  correctOptionId: string
}

class TriviaAnswer {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Trivia id', example: 'Trivia 1' })
  id: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Trivia selected option id', example: 'Option A' })
  optionId: string
}

export class SaveTriviaAnswersInput {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty({ description: 'Trivia generated' })
  triviaGenerated: Array<Trivia>

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty({ description: 'Trivia answers' })
  triviaAnswers: Array<TriviaAnswer>

  @IsNotEmpty()
  @IsString()
  @ApiHideProperty()
  userId: string
}
