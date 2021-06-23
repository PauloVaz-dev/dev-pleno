import { Field, InputType } from '@nestjs/graphql';
import { Validate } from 'class-validator';

@InputType()
export class StreamServerCreateInputDTO {
  @Field({ nullable: true })
  name: string;
}
