import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm'

import TransactionEntity from '@app/entity/transaction.entity'
import PartnerEntity from '@app/entity/partner.entity'

@Entity()
export class CouponEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  code: string

  @Column()
  quantity: number

  @Column()
  value: number

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
