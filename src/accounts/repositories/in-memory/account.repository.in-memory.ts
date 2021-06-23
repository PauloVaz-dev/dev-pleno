import { Injectable } from '@nestjs/common';
import { Account } from 'src/accounts/infra/typeorm/entities/account.entity';

import {
  IAccountRepository,
  ICreateAccount,
} from '../account.repository.interface';

@Injectable()
export class AccountRepositoryInMemory {
  accounts: Account[] = [];

  //   async findById(id: string): Promise<Account> {
  //     const product = this.accounts.find((product) => product.id === id);
  //     return product;
  //   }

  //   async findOne(id: string): Promise<Account> {
  //     const product = this.accounts.find((product) => product.id === id);
  //     return product;
  //   }

  //   async findByName(name: string): Promise<Account | null> {
  //     const product = this.accounts.find((product) => product.name === name);
  //     return product || null;
  //   }

  //   async delete(id: string): Promise<boolean> {
  //     const userToken = this.accounts.find((category) => category.id === id);
  //     this.accounts.splice(this.accounts.indexOf(userToken));
  //     return true;
  //   }

  //   async find(): Promise<Account[]> {
  //     const list = this.accounts;
  //     return list;
  //   }
  //   async create({
  //     name,
  //     server_id,
  //     project_id,
  //     remote_account_id,
  //   }: ICreateAccount): Promise<Account> {
  //     const category = new Account();

  //     Object.assign(category, {
  //       name,
  //       server_id,
  //       project_id,
  //       remote_account_id,
  //     });

  //     this.accounts.push(category);

  //     return category;
  //   }

  //   async save({
  //     id,
  //     name,
  //     project_id,
  //     server_id,
  //     remote_account_id,
  //   }: ICreateAccount): Promise<Account> {
  //     const findIndex = this.accounts.findIndex((product) => product.id === id);
  //     this.accounts[findIndex].name = name;
  //     this.accounts[findIndex].project_id = project_id;
  //     this.accounts[findIndex].server_id = server_id;
  //     this.accounts[findIndex].remote_account_id = remote_account_id;

  //     const product = {
  //       id,
  //       name,
  //       project_id,
  //       server_id,
  //       remote_account_id,
  //     };
  //     return product;
  //   }
}
