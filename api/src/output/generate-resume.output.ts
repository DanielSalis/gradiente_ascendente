import { ApiProperty } from '@nestjs/swagger'

export class GenerateResumeOutput {
  @ApiProperty({ description: 'Resumes generated' })
  resumes: string[]
}
