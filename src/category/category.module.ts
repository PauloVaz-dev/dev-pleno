import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CategoryResolver } from './category.resolvers';
import { CategoryService } from './category.service';
import { CategoryRepositoryInMemory } from './repositories/inMemory/category.repository.inmemory';

import { CategorySlugIsUnique } from './validations/CategorySlugIsUnique';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [
    CategoryService,
    CategoryResolver,
    CategorySlugIsUnique,
    {
      provide: 'CategoryRepositoryInterface',
      useClass:
        process.env.NODE_ENV === 'test'
          ? CategoryRepositoryInMemory
          : CategoryRepository,
    },
  ],
  exports: [],
})
export default class CategoryModule {}
