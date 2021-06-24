import { String } from 'aws-sdk/clients/appstream';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250, nullable: false })
  name: string;

  @Column({ length: 250, nullable: true })
  email: string;

  @Column({ length: 250, nullable: true })
  password: string;

  @Column({ length: 250, nullable: true })
  role: string;

  @Column({ length: 250, nullable: true })
  accounts_handled: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
