import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity() // sql table === 'not_to_do'
export class NotTodo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column({ nullable: true })
  done: boolean
}
