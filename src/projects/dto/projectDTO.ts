import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProjectDTO {
  @Field()
  id: number;

  @Field()
  name: string;
}
