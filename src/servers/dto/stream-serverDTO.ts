import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StreamServerDTO {
  @Field()
  id: number;

  @Field()
  name: string;
}
