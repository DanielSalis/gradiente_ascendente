import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GenerateResumeInput {
  @IsNotEmpty()
  @IsString()
  @ApiHideProperty()
  userId: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  contentUrl: string
}
