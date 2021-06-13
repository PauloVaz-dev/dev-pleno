import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BrandDTO {
  @Field()
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  slug: string;

  @Field()
  logo: string;
}
