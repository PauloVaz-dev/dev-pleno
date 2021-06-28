import { Field, Int, ObjectType } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
export class UserDTO {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  role: string;
}
