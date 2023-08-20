import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import PersonEntity from './person.entity';
import UserTriviaConfigEntity from './user-trivia-config.entity';
import TriviaHistoryEntity from './trivia-history.entity';
import WalletEntity from './wallet.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  login: string

  @Column()
  passwordHash: string

  @Column()
  personId: string

  @Column()
  active: boolean

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date

  @OneToOne(() => PersonEntity)
  public person: PersonEntity;

  @OneToOne(() => UserTriviaConfigEntity)
  public usertriviaconfig: UserTriviaConfigEntity;

  @OneToMany(() => TriviaHistoryEntity, (th: TriviaHistoryEntity) => th.user)
  public th: TriviaHistoryEntity[];

  @OneToOne(() => WalletEntity)
  public walllet: WalletEntity;
}


export default UserEntity;