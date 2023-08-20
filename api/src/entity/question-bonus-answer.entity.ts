import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'

import QuestionBonusEntity from '@app/entity/question-bonus.entity'
import PersonEntity from '@app/entity/person.entity'

@Entity()
export class QuestionBonusAnswerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  value: string

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => QuestionBonusEntity, (questionBonus: QuestionBonusEntity) => questionBonus.questionbonusAnswer)
  questionBonus: QuestionBonusEntity

  @ManyToOne(() => PersonEntity, (person: PersonEntity) => person.questionBonusAnswers)
  person: PersonEntity
}
export default QuestionBonusAnswerEntity
