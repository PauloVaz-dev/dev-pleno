import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './infra/typeorm/repositories/user.repository';
import { User } from './infra/typeorm/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    UserResolver,
    {
      provide: 'UserRepositoryInterface',
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
