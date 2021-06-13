import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryUpdateInputDTO {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  slug: string;
}
