import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'

import QuestionBonusAnswerEntity from '@app/entity/question-bonus-answer.entity'

@Entity()
export class PersonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  cpf: string

  @Column()
  birthDate: Date

  @Column()
  email: string

  @Column()
  phone: string

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany('QuestionBonusAnswerEntity', (questionBonusAnswer: QuestionBonusAnswerEntity) => questionBonusAnswer.person)
  questionBonusAnswers: QuestionBonusAnswerEntity[]
}

export default PersonEntity
