import { Injectable } from '@nestjs/common'

import { ExportLeadsInput } from '@app/input/export-leads.input'
import { ExportLeadsOutput } from '@app/output/export-leads.output'

@Injectable()
export class ExportLeads {
  handle(input: ExportLeadsInput): Promise<ExportLeadsOutput> {
    return Promise.resolve({})
  }
}
