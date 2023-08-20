import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class UserTriviaConfigEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  questionPointsToEarn: number

  @Column()
  questionXpToEarn: number

  @Column()
  triviasToLevelUp: number

  @Column()
  currentLevel: number

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}
export default UserTriviaConfigEntity
