import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './infra/typeorm/entities/user.entity';
import { IUserRepository } from './repositories/user.repository.interface';

interface Request {
  name: string;
  email: string;
  password: string;
  role: string;
}

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryInterface')
    private userRepository: IUserRepository,
  ) {}

  //   async create(user: Request): Promise<User> {
  //     const { email } = user;

  //     const checkUserEmailExists = await this.userRepository.find({
  //       where: { email: email },
  //     });
  //     if (checkUserEmailExists) {
  //       throw new Error('Email already used.');
  //     }

  //     try {
  //       const userdb = this.userRepository.create(user);

  //       await this.userRepository.save(userdb);

  //       return userdb;
  //     } catch (err) {
  //       throw new Error('Error.');
  //     }
  //   }

  //   async findAll(): Promise<User[]> {
  //     return this.userRepository.find();
  //   }

  //   async findById(id: string): Promise<User> {
  //     return this.userRepository.findOne(id);
  //   }

  //   async findByEmail(email: string): Promise<User> {
  //     const user = await this.userRepository.findOne({
  //       where: [{ email: email }],
  //     });
  //     if (!user) {
  //       throw new NotFoundException('Usuário não encontrado');
  //     }
  //     return user;
  //   }

  //   async update(id: string, input: Request): Promise<User> {
  //     const user = await this.userRepository.save({
  //       id,
  //       ...input,
  //     });
  //     return user;
  //   }

  //   async delete(id: string): Promise<boolean> {
  //     const checkUserExists = await this.userRepository.findOne(id);

  //     if (!checkUserExists) {
  //       throw new Error('User not exist.');
  //     }
  //     try {
  //       await this.userRepository.delete(id);
  //       return true;
  //     } catch (error) {
  //       return false;
  //     }
  //   }
}
