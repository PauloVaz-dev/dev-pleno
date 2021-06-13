import { Field, InputType } from '@nestjs/graphql';
import { Validate } from 'class-validator';
import { BarndSlugIsUnique } from '../validations/BrandSlugIsUnique';

@InputType()
export class BrandCreateInputDTO {
  @Field()
  name: string;

  @Field()
  @Validate(BarndSlugIsUnique)
  slug: string;
}
