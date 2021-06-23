import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class StreamServerUpdateInputDTO {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}
