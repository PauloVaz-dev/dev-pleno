import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { type } from 'os';

@InputType()
export class AccountCreateInput {
  @Field()
  @Length(5)
  name: string;

  @Field((type) => Int, { nullable: true })
  project?: number;

  @Field((type) => Int, { nullable: true })
  server?: number;

  @Field({ nullable: true })
  remote_account?: string;
}
