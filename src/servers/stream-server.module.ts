import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StreamServer } from './infra/typeorm/entities/stream-server.entity';

import { StreamServerRepository } from './infra/typeorm/repositories/stream-server.repository';
import { StreamServerResolver } from './stream-server.resolvers';
import { StreamServerService } from './stream-server.service';

@Module({
  imports: [TypeOrmModule.forFeature([StreamServer])],
  providers: [
    StreamServerService,
    StreamServerResolver,
    {
      provide: 'StreamServerRepositoryInterface',
      useClass: StreamServerRepository,
    },
  ],
  exports: [],
})
export default class StreamServerModule {}
