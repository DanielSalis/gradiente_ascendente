import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class QuestionBonusAnswerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  value: string[]

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}

export default QuestionBonusAnswerEntity;