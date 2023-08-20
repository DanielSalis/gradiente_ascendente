import { Injectable } from '@nestjs/common'

import { GenerateResumeInput } from '@app/input/generate-resume.input'
import { GenerateResumeOutput } from '@app/output/generate-resume.output'

@Injectable()
export class GenerateResume {
  handle(input: GenerateResumeInput): Promise<GenerateResumeOutput> {
    return Promise.resolve(<GenerateResumeOutput>{})
  }
}
