import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Message2 {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public content: string;

  @CreateDateColumn()
  createdAt: Date;
}

export default Message2;
