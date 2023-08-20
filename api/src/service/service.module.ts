import { Module } from '@nestjs/common'

import { ErrorService } from '@app/service/error.service'
import { ValidateService } from '@app/service/validate.service'

@Module({
  providers: [ErrorService, ValidateService],
  exports: [ErrorService, ValidateService],
})
export class ServiceModule {}
