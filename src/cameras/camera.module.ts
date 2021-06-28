import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from 'src/accounts/account.service';
import { Account } from 'src/accounts/infra/typeorm/entities/account.entity';
import { AccountRepository } from 'src/accounts/infra/typeorm/repositories/account.repository';
import { CameraResolver } from './camera.resolvers';
import { CameraService } from './camera.service';
import { Camera } from './infra/typeorm/entities/camera.entity';
import { CameraRepository } from './infra/typeorm/repositories/camera.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Camera, Account])],
  providers: [
    CameraService,
    CameraResolver,
    AccountService,
    {
      provide: 'CameraRepositoryInterface',
      useClass: CameraRepository,
    },
    {
      provide: 'AccountRepositoryInterface',
      useClass: AccountRepository,
    },
  ],
})
export class CameraModule {}
