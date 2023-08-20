import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class QuestionBonusAnswerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  // adicionar relaccao com question bonus entity e person entity

  @Column()
  value: string[]

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}
export default QuestionBonusAnswerEntity
