import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class UserTriviaConfigEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  currentPoints: number

  @Column()
  currentXP: number

  @Column()
  level: number

  @Column()
  @CreateDateColumn()
  createdAt: Date

  @Column()
  @UpdateDateColumn()
  updatedAt: Date
}


export default UserTriviaConfigEntity;