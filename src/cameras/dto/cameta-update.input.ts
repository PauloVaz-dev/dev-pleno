import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class CameraUpdateInput {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  streamid: string;

  @Field({ nullable: true })
  url: string;

  @Field({ nullable: true })
  account: number;
}
