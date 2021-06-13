import { Field, InputType } from '@nestjs/graphql';
import { Validate } from 'class-validator';
import { CategorySlugIsUnique } from '../validations/CategorySlugIsUnique';

@InputType()
export class CategoryCreateInputDTO {
  @Field({ nullable: true })
  name: string;

  @Field()
  slug: string;
}
