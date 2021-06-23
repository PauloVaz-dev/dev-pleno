import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './infra/typeorm/entities/project.entity';
import { ProjectRepository } from './infra/typeorm/repositories/project.repository';
import { ProjectResolver } from './project.resolvers';
import { ProjectService } from './project.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [
    ProjectService,
    ProjectResolver,
    {
      provide: 'ProjectRepositoryInterface',
      useClass: ProjectRepository,
    },
  ],
  exports: [],
})
export default class ProjectModule {}
