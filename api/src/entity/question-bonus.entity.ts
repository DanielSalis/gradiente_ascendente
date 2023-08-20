import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne } from 'typeorm'

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

  // Ajustar relation, uma questao bonus pode ter varias respostas de usuarios diferentes

  @OneToOne(() => QuestionBonusAnswerEntity)
  questionbonusAnswer: QuestionBonusAnswerEntity

  @ManyToOne(() => PartnerEntity, (partner: PartnerEntity) => partner.questionsBonus)
  partner: PartnerEntity
}
export default QuestionBonusEntity
