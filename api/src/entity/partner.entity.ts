import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'

import QuestionBonusEntity from '@app/entity/question-bonus.entity'
import CouponEntity from '@app/entity/coupon.entity'

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
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany('QuestionBonusEntity', (questionbonus: QuestionBonusEntity) => questionbonus.partner)
  questionsBonus: QuestionBonusEntity[]

  @OneToMany('CouponEntity', (coupon: CouponEntity) => coupon.partner)
  coupons: CouponEntity[]
}
export default PartnerEntity
