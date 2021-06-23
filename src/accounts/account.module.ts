import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountResolver } from './account.resolvers';
import { AccountService } from './account.service';
import { Account } from './infra/typeorm/entities/account.entity';
import { AccountRepository } from './infra/typeorm/repositories/account.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [
    AccountService,
    AccountResolver,
    {
      provide: 'AccountRepositoryInterface',
      useClass: AccountRepository,
    },
  ],
})
export class AccountModule {}
