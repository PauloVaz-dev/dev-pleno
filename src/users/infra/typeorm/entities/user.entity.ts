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

export type UserRoleType = 'admin' | 'root';

enum rolesType {
  root = 'root',
  admin = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250, nullable: false })
  name: string;

  @Column({ length: 250, nullable: false })
  email: string;

  @Column({ length: 250, nullable: false })
  password: string;

  @Column({ type: 'enum', enum: rolesType })
  role: UserRoleType;

  @Column({ length: 250, nullable: true })
  accounts_handled: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
