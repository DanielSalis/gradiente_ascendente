import { ApiTags, ApiOkResponse, ApiOperation, ApiBadRequestResponse } from '@nestjs/swagger'
import { Controller, Get } from '@nestjs/common'

import { Error } from '@app/swagger/error.model'
// import { AdminKeyGuard } from '@app/guards/admin-key.guard'

@ApiTags('HealthCheck')
@Controller('/')
export class HealthCheckAction {
  @ApiOperation({ operationId: 'HealthCheck', summary: 'Health Check endpoint' })
  /*
    Adding 'type: Error' is workaround for 'Could not resolve reference: #/components/schemas/Error'.
    getSchemaPath adding "$ref: "#/components/schemas/CarrierEntitlementCreateInput" to the output, but not creating schema itself.
    Thus in swagger json there is no Error, but we have reference to is
  */
  @ApiBadRequestResponse({
    type: Error,
    description: 'Bad body request response'
  })
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          example: 'Ok',
          description: 'This property is an indicator of success'
        },
        time: {
          type: 'string',
          example: 'Tue Aug 31 2021',
          description: 'This property is the current date'
        }
      }
    },
    description: 'Success response'
  })
  @Get()
  // @UseGuards(AdminKeyGuard)
  action(): Record<string, string> {
    return {
      status: 'Ok',
      time: new Date().toDateString()
    }
  }
}
