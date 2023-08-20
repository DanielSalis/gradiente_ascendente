import { ApiHideProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ExportLeadsInput {
  @IsNotEmpty()
  @IsString()
  @ApiHideProperty()
  partnerId: string
}
