import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import QuestionBonusEntity from './question-bonus.entity';
import CouponEntity from './coupon.entity';

@Entity()
export class PartnerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  enable: boolean

  @Column()
  business_category: string[]

  @Column()
  vality: Date

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => QuestionBonusEntity, (questiobonus: QuestionBonusEntity) => questiobonus.partner)
  public questiobonus: QuestionBonusEntity[];

  @OneToMany(() => CouponEntity, (coupon: CouponEntity) => coupon.partner)
  public coupon: CouponEntity[];

}
export default PartnerEntity;