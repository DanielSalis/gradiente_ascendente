import { Injectable, ValidationError } from '@nestjs/common'
import { ClassConstructor, plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'

import ErrorType from '@app/constant/error.enum'
import { ErrorService } from '@app/service/error.service'
import ValidationException from '@app/error/validation.exception'

@Injectable()
export class ValidateService {
  constructor(private errorService: ErrorService) {}

  async validateInput<T extends object, V>(
    type: ClassConstructor<T>,
    input: V,
    errorType: string = ErrorType.INVALID_INPUT
  ): Promise<void> {
    try {
      await validateOrReject(plainToInstance(type, input))
    } catch (err) {
      this.errorService.throw(err as ValidationError[], errorType)
    }
  }

  async validateAndTransformInput<T extends object, V>(
    type: ClassConstructor<T>,
    input: V,
    errorType: string = ErrorType.INVALID_INPUT
  ): Promise<T> {
    try {
      const result = plainToInstance(type, input)
      await validateOrReject(result, { whitelist: true })
      return result
    } catch (err) {
      this.errorService.throw(err as ValidationError[], errorType)
    }
  }


  async validateAndTransformObject<T extends object, V>(validator: ClassConstructor<T>, input: V): Promise<T> {
    try {
      const result = plainToInstance(validator, input)
      await validateOrReject(result, { whitelist: true })
      return result
    } catch (error: unknown) {
      if (error instanceof Array) {
        throw new ValidationException('', <ValidationError[]>error)
      } else {
        throw error
      }
    }
  }
}
