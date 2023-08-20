import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from 'typeorm'

import TransactionEntity from '@app/entity/transaction.entity'
import PersonEntity from '@app/entity/person.entity'

@Entity()
export class WalletEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  points: number

  @Column()
  currenExperiencePoints: number

  @Column()
  currentLevel: number

  @Column()
  coupons: string

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => TransactionEntity, (transaction: TransactionEntity) => transaction.wallet)
  transactions: TransactionEntity[]

  @OneToOne(() => PersonEntity)
  person: PersonEntity
}
export default WalletEntity
