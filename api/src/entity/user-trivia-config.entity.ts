import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm'

import UserEntity from '@app/entity/user.entity'

@Entity()
export class UserTriviaConfigEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(() => UserEntity)
  user: UserEntity

  @Column()
  questionPointsToEarn: number

  @Column()
  questionXpToEarn: number

  @Column()
  triviasToLevelUp: number

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}
export default UserTriviaConfigEntity
