import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import UserEntity from './user.entity';

@Entity()
export class TriviaHistoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('json')
  rightAnsw: object
  
  @Column('json')
  answers: object

  @Column()
  score: number

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.th) 
  public user: UserEntity;
}


export default TriviaHistoryEntity;