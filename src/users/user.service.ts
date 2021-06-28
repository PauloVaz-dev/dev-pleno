import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './infra/typeorm/entities/user.entity';
import { IUserRepository } from './repositories/user.repository.interface';
import { hash } from 'bcryptjs';
import { NumberAttributeValue } from 'aws-sdk/clients/clouddirectory';

enum rolesType {
  root = 'root',
  admin = 'admin',
}

interface IRequest {
  name: string;
  email: string;
  password: string;
  role: rolesType;
}

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryInterface')
    private userRepository: IUserRepository,
  ) {}

  async create(user: IRequest): Promise<User> {
    const { name, email, password, role } = user;

    const checkUserEmailExists = await this.userRepository.findByEmail(email);
    if (checkUserEmailExists) {
      throw new Error('Email already used.');
    }

    const passwordHash = await hash(password, 10);

    try {
      const userdb = this.userRepository.create({
        name,
        email,
        password: passwordHash,
        role,
      });

      return userdb;
    } catch (err) {
      throw new Error('Error.');
    }
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async update(id: number, input: IRequest): Promise<User> {
    const { name, email, role } = input;
    const user = await this.userRepository.save({
      id,
      name,
      email,
      role,
    });
    return user;
  }

  async delete(id: number): Promise<boolean> {
    const checkUserExists = await this.userRepository.findById(id);

    if (!checkUserExists) {
      throw new Error('User not exist.');
    }
    try {
      await this.userRepository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
