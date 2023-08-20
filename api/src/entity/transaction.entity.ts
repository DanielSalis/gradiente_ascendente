import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm'
import CouponEntity from './coupon.entity';
import PersonEntity from './person.entity';
import WalletEntity from './wallet.entity';

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

  @ManyToOne(() => CouponEntity, (coupon: CouponEntity) => coupon.transaction) 
  public coupon: CouponEntity;

  @ManyToOne(() => PersonEntity, (person: PersonEntity) => person.transaction) 
  public person: PersonEntity;

  @ManyToOne(() => WalletEntity, (wallet: WalletEntity) => wallet.transaction) 
  public wallet: WalletEntity;

}
export default TransactionEntity;