import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm'

import QuestionBonusAnswerEntity from '@app/entity/question-bonus-answer.entity'
import UserEntity from './user.entity'

@Entity()
export class PersonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  document: string

  @Column()
  birthDate: Date

  @Column()
  email: string

  @Column()
  phone: string

  @OneToOne(() => UserEntity, user => user.person) // Add cascade option if needed
  @JoinColumn()
  user: UserEntity

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
