import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import TransactionEntity from './transaction.entity';
import PartnerEntity from './partner.entity';

@Entity()
export class CouponEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column() 
  public coupon_code: string

  @Column() 
  public partner_id: string

  @Column()
  public quantity: number
  
  @Column()
  public value: number

  @Column()
  public vality: Date

  @Column()
  @CreateDateColumn()
  public createdAt: Date

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date

  @OneToMany(() => TransactionEntity, (transaction: TransactionEntity) => transaction.coupon)
  public transaction: TransactionEntity[];

  @ManyToOne(() => PartnerEntity, (partner: PartnerEntity) => partner.coupon) 
  public partner: PartnerEntity;

}

export default CouponEntity;