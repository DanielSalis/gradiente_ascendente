import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import TransactionEntity from './transaction.entity';

@Entity()
export class PersonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  cpf: string

  @Column()
  birthDate: Date

  @Column()
  email: string

  @Column()
  phone: string

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => TransactionEntity, (transaction: TransactionEntity) => transaction.person)
  public transaction: TransactionEntity[];
}

export default PersonEntity;