import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProjectDTO {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}
