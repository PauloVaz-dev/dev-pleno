import { Account } from 'src/accounts/infra/typeorm/entities/account.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Camera {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250, nullable: false })
  streamid: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  account_id?: number;

  @ManyToOne((type) => Account, (account) => account.cameras)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account?: Account;
}
