import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { type } from 'os';

@InputType()
export class CameraCreateInput {
  @Field({ nullable: true })
  streamid: string;

  @Field({ nullable: true })
  url: string;

  @Field({ nullable: true })
  account: number;
}
