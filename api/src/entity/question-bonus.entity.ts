import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm'

import QuestionBonusAnswerEntity from '@app/entity/question-bonus-answer.entity'
import PartnerEntity from '@app/entity/partner.entity'

@Entity()
export class QuestionBonusEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany('QuestionBonusAnswerEntity', (questionbonusAnswer: QuestionBonusAnswerEntity) => questionbonusAnswer.questionBonus)
  questionbonusAnswer: QuestionBonusAnswerEntity

  @ManyToOne(() => PartnerEntity, (partner: PartnerEntity) => partner.questionsBonus)
  partner: PartnerEntity
}
export default QuestionBonusEntity
