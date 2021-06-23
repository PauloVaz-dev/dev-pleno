import { Inject, Injectable } from '@nestjs/common';
import { Account } from './infra/typeorm/entities/account.entity';
import {
  IAccountRepository,
  ICreateAccount,
} from './repositories/account.repository.interface';

interface IRequest {
  id?: number;
  name: string;
  project?: number;
  server?: number;
  remote_account?: string;
}

@Injectable()
export class AccountService {
  constructor(
    @Inject('AccountRepositoryInterface')
    private accountRepository: IAccountRepository,
  ) {}

  async findAll(): Promise<Account[]> {
    const accounts = await this.accountRepository.find();
    return accounts;
  }

  async findByName(name: string): Promise<Account[]> {
    const accounts = await this.accountRepository.findByName(name);
    return accounts;
  }

  async create(input: IRequest): Promise<Account> {
    const { name, project, server, remote_account } = input;

    const checkAccountExists = await this.accountRepository.findByName(name);

    if (checkAccountExists.length > 0) {
      throw new Error('Account already used.');
    }

    return this.accountRepository.create({ name, project, server });
  }

  async update(id: number, input: IRequest): Promise<Account> {
    const { name, project, server, remote_account } = input;
    const checkAccountExists = await this.accountRepository.findById(id);

    if (!checkAccountExists) {
      throw new Error('Account is not exists.');
    }

    const product = await this.accountRepository.save({
      id,
      name,
      project,
      server,
    });
    return product;
  }

  async delete(id: number): Promise<boolean> {
    const checkProductExists = await this.accountRepository.findById(id);

    if (!checkProductExists) {
      throw new Error('Account is not exists.');
    }
    try {
      await this.accountRepository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
