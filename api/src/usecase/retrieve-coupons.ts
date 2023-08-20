import { Injectable } from '@nestjs/common'

import { RetrieveCouponsInput } from '@app/input/retrieve-coupons.input'
import { RetrieveCouponsOutput } from '@app/output/retrieve-coupons.output'

@Injectable()
export class RetrieveCoupons {
  handle(input: RetrieveCouponsInput): Promise<RetrieveCouponsOutput> {
    return Promise.resolve(<RetrieveCouponsOutput>{})
  }
}
