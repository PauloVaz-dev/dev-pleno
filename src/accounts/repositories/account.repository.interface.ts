import { String } from 'aws-sdk/clients/iot';
import { NumberOfBytesType } from 'aws-sdk/clients/kms';
import { Account } from '../infra/typeorm/entities/account.entity';

export interface ICreateAccount {
  id?: number;
  name: string;
  project?: number;
  server?: number;
  remote_account_id?: string;
}

export interface IAccountRepository {
  find(): Promise<Account[]>;
  findByName(name: string): Promise<Account[]>;
  findById(id: number): Promise<Account>;
  create(input: ICreateAccount): Promise<Account>;
  delete(id: number): Promise<boolean>;
  save({
    id,
    name,
  }: // project_id,
  // server_id,
  // remote_account_id,
  ICreateAccount): Promise<Account>;
}
