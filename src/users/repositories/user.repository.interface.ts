import { User } from '../infra/typeorm/entities/user.entity';

enum rolesType {
  root = 'root',
  admin = 'admin',
}
export interface ICreateUser {
  id?: number;
  name: string;
  email: string;
  password?: string;
  role: rolesType;
}

export interface IUserRepository {
  find(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: number): Promise<User>;
  create(input: ICreateUser): Promise<User>;
  delete(id: number): Promise<boolean>;
  save({ id, name, email, role }: ICreateUser): Promise<User>;
}
