import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm'

import TransactionEntity from '@app/entity/transaction.entity'
import PartnerEntity from '@app/entity/partner.entity'

@Entity()
export class CouponEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  coupon_code: string

  @Column()
  partner_id: string

  @Column()
  quantity: number

  @Column()
  value: number

  @Column()
  vality: Date

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany('TransactionEntity', (transaction: TransactionEntity) => transaction.coupon)
  transactions: TransactionEntity[]

  @ManyToOne('PartnerEntity', (partner: PartnerEntity) => partner.coupons)
  partner: PartnerEntity
}

export default CouponEntity
