import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BrandUpdateInputDTO {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  slug: string;
}
