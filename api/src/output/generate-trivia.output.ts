import { ApiProperty } from '@nestjs/swagger'

class Alternative {
  @ApiProperty({ description: '' })
  id: string

  @ApiProperty({ description: '' })
  content: string
}

class QuestionBlock {
  @ApiProperty({ description: '' })
  title: string

  @ApiProperty({ description: '' })
  alternatives: Array<Alternative>

  @ApiProperty({ description: '' })
  correctAlternativeId: string
}

export class GenerateTriviaOutput extends Array<QuestionBlock> {}
