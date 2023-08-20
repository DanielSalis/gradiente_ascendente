import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import TransactionEntity from './transaction.entity';

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

  @OneToMany(() => TransactionEntity, (transaction: TransactionEntity) => transaction.coupon)
  public transaction: TransactionEntity[];
}


//relação one-to-one com user id

export default WalletEntity;