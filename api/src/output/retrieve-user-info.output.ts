import { ApiProperty } from '@nestjs/swagger'

export class RetrieveUserInfoOutput {
  @ApiProperty({ description: 'User identifier' })
  id: string

  @ApiProperty({ description: '' })
  firstName: string

  @ApiProperty({ description: '' })
  email: string

  @ApiProperty({ description: '' })
  phone: string

  @ApiProperty({ description: '' })
  points: number

  @ApiProperty({ description: '' })
  coupons: string[]

  @ApiProperty({ description: '' })
  currentExperiencePoints: number

  @ApiProperty({ description: '' })
  nextLevelExperiencePoints: number

  @ApiProperty({ description: '' })
  currentLevel: number

  @ApiProperty({ description: 'User created at' })
  createdAt: Date
}
