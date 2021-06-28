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

  async find(): Promise<User[]> {
    return await this.repository.find();
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: { email },
    });

    return user;
  }

  async findById(id: number): Promise<User> {
    return await this.repository.findOne(id);
  }
  async create({ name, email, password, role }: ICreateUser): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      role,
    });

    await this.repository.save(user);
    return user;
  }
  async delete(id: number): Promise<boolean> {
    await this.repository.delete(id);
    return true;
  }

  async save({ id, name, email, role }: ICreateUser): Promise<User> {
    const user = await this.repository.save({
      id,
      name,
      email,
      role,
    });

    return user;
  }
}
