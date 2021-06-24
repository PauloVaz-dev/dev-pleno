import { User } from '../infra/typeorm/entities/user.entity';

export interface ICreateUser {
  id?: number;
  name: string;
  project?: number;
  server?: number;
  remote_account_id?: string;
}

export interface IUserRepository {
  find(): Promise<User[]>;
  findByName(name: string): Promise<User[]>;
  findById(id: number): Promise<User>;
  create(input: ICreateUser): Promise<User>;
  delete(id: number): Promise<boolean>;
  save({
    id,
    name,
  }: // project_id,
  // server_id,
  // remote_account_id,
  ICreateUser): Promise<User>;
}
