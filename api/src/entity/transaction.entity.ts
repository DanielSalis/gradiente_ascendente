import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'

import CouponEntity from '@app/entity/coupon.entity'
import WalletEntity from '@app/entity/wallet.entity'

@Entity()
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  operationType: string

  @Column()
  initialAmount: number

  @Column()
  transactionAmount: number

  @Column()
  finalAmount: number

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => CouponEntity, (coupon: CouponEntity) => coupon.transactions)
  coupon: CouponEntity

  @ManyToOne(() => WalletEntity, (wallet: WalletEntity) => wallet.transactions)
  wallet: WalletEntity
}
export default TransactionEntity
