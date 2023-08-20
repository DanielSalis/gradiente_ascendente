import { Injectable } from '@nestjs/common'

import { CreatePartnerInput } from '@app/input/create-partner.input'
import { CreatePartnerOutput } from '@app/output/create-partner.output'

@Injectable()
export class CreatePartner {
  handle(input: CreatePartnerInput): Promise<CreatePartnerOutput> {
    return Promise.resolve({
      key: 'partner-key'
    })
  }
}
