import { Repository, EntityRepository } from 'typeorm';

import {
  ICreateUser,
  IUserRepository,
} from 'src/users/repositories/user.repository.interface';
import { UserDTO } from 'src/users/dto/userDTO';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}
  find(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  create(input: ICreateUser): Promise<User> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  save({ id, name }: ICreateUser): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
