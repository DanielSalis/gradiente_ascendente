import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import QuestionBonusAnswerEntity from './question-bonus-answer.entity';
import PartnerEntity from './partner.entity';

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

  @OneToOne(() => QuestionBonusAnswerEntity)
  public questionbonusanswer: QuestionBonusAnswerEntity;

  @ManyToOne(() => PartnerEntity, (person: PartnerEntity) => partner.questiobonus) 
  public partner: PartnerEntity;
}

export default QuestionBonusEntity;