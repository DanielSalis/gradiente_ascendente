import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm'

import PersonEntity from '@app/entity/person.entity'
import UserTriviaConfigEntity from '@app/entity/user-trivia-config.entity'
import TriviaHistoryEntity from '@app/entity/trivia-history.entity'
import WalletEntity from '@app/entity/wallet.entity'

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  login: string

  @Column()
  passwordHash: string

  @Column()
  active: boolean

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @OneToOne(() => PersonEntity, person => person.user, { eager: true })
  @JoinColumn()
  person: PersonEntity

  @OneToOne(() => UserTriviaConfigEntity)
  usertriviaconfig: UserTriviaConfigEntity

  @OneToMany(() => TriviaHistoryEntity, (triviaHistory: TriviaHistoryEntity) => triviaHistory.user)
  triviaHistories?: TriviaHistoryEntity[]

  @OneToOne(() => WalletEntity)
  public wallet?: WalletEntity
}
export default UserEntity
