import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'

import UserEntity from '@app/entity/user.entity'

@Entity()
export class TriviaHistoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('json')
  triviaGenerated: object

  @Column('json')
  answers: object

  @Column()
  score: number

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.id)
  user: UserEntity
}
export default TriviaHistoryEntity
