import { Injectable } from '@nestjs/common'

import { RetrieveUserInfoInput } from '@app/input/retrieve-user-info.input'
import { RetrieveUserInfoOutput } from '@app/output/retrieve-user-info.output'

@Injectable()
export class RetrieveUserInfo {
  handle(input: RetrieveUserInfoInput): Promise<RetrieveUserInfoOutput> {
    return Promise.resolve(<RetrieveUserInfoOutput>{})
  }
}
