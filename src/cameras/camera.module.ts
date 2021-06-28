import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CameraResolver } from './camera.resolvers';
import { CameraService } from './camera.service';
import { Camera } from './infra/typeorm/entities/camera.entity';
import { CameraRepository } from './infra/typeorm/repositories/camera.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Camera])],
  providers: [
    CameraService,
    CameraResolver,
    {
      provide: 'CameraRepositoryInterface',
      useClass: CameraRepository,
    },
  ],
})
export class CameraModule {}
