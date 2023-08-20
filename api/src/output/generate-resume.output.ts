import { ApiProperty } from '@nestjs/swagger'

import { GenerateTriviaOutput } from '@app/output/generate-trivia.output'

export class GenerateResumeOutput {
  @ApiProperty({ description: 'Resume generated' })
  resume: string

  @ApiProperty({ description: 'Trivia generated' })
  trivia: GenerateTriviaOutput
}
