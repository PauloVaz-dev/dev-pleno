import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { AccountUpdateInput } from './dto/account-update.input';
import { AccountCreateInput } from './dto/account.create.input';
import { AccountDTO } from './dto/accountDTO';
import { AccountDTOAll } from './dto/accountDTOAll';
import { AccountMapper } from './account.mapper';

@Resolver((of) => AccountDTO)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation((returns) => AccountDTO)
  async createAccount(
    @Args('input') input: AccountCreateInput,
  ): Promise<AccountDTO> {
    return await this.accountService.create(input);
  }

  @Query((returns) => [AccountDTOAll])
  async getAllAccounts(): Promise<AccountDTO[]> {
    const accounts = await this.accountService.findAll();
    console.log(accounts);
    return accounts;
  }

  @Mutation((returns) => AccountDTO)
  async updateAccount(
    @Args('input') input: AccountUpdateInput,
  ): Promise<AccountDTO> {
    return await this.accountService.update(input.id, input);
  }

  @Mutation((returns) => Boolean)
  async deleteAccount(@Args('id') id: number): Promise<boolean> {
    await this.accountService.delete(id);
    return true;
  }

  @Query((returns) => [AccountDTO])
  async getAccountByName(@Args('name') name: string): Promise<AccountDTO[]> {
    return await this.accountService.findByName(name);
  }
}
