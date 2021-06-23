import { InjectRepository } from '@nestjs/typeorm';
import { Number } from 'aws-sdk/clients/iot';
import {
  IAccountRepository,
  ICreateAccount,
} from 'src/accounts/repositories/account.repository.interface';

import { Like, Repository } from 'typeorm';
import { Account } from '../entities/account.entity';

export class AccountRepository implements IAccountRepository {
  constructor(
    @InjectRepository(Account)
    private readonly repository: Repository<Account>,
  ) {}

  async findByName(name: string): Promise<Account[] | null> {
    const account = await this.repository.find({
      where: {
        name: Like(`%${name}%`),
      },
    });

    return account || null;
  }

  async find(): Promise<Account[]> {
    const productsQuery = this.repository
      .createQueryBuilder('account')
      .leftJoinAndSelect('account.project', 'projects')
      .leftJoinAndSelect('account.streamServer', 'streamServer');

    const accounts = await productsQuery.getMany();

    return accounts;
  }

  async findById(id: number): Promise<Account | null> {
    const account = await this.repository.findOne({
      where: {
        id,
      },
    });
    return account || null;
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.repository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }

  async create({ name, project, server }: ICreateAccount): Promise<Account> {
    const product = this.repository.create({
      name,
      project_id: project,
      server_id: server,
    });

    await this.repository.save(product);
    return product;
  }

  async save({ id, name, server, project }: ICreateAccount): Promise<Account> {
    const product = await this.repository.save({
      id,
      name,
      project_id: project,
      server_id: server,
    });

    return product;
  }
}
