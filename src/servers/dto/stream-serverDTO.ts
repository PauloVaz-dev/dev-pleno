import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StreamServerDTO {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}
