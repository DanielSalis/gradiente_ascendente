import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'

import TransactionEntity from '@app/entity/transaction.entity'

@Entity()
export class WalletEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  points: number

  @Column()
  coupons: string[]

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => TransactionEntity, (transaction: TransactionEntity) => transaction.wallet)
  transactions: TransactionEntity[]
}
export default WalletEntity
