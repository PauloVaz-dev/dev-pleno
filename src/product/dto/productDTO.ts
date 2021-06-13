import { Field, ObjectType } from '@nestjs/graphql';
import { Length, Validate } from 'class-validator';
import { Category } from 'src/category/category.entity';
import { CategoryDTO } from '../../category/dto/categoryDTO';
import { ProductSlugIsUnique } from '../validations/ProductSlugIsUnique';

@ObjectType()
export class ProductDTO {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  slug: string;

  @Field()
  category: CategoryDTO;
}
