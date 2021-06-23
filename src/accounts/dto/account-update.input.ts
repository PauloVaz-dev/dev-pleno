import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class AccountUpdateInput {
  @Field((type) => Int)
  id: number;

  @Field()
  @Length(10)
  name: string;

  @Field((type) => Int)
  project?: number;

  @Field((type) => Int, { nullable: true })
  server?: number;

  @Field({ nullable: true })
  remote_account?: string;
}
