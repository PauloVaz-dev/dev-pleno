import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

@InputType()
export class ProducCreatetInput {
  @Field()
  @Length(5)
  name: string;

  @Field()
  @Length(5)
  slug: string;

  @Field()
  @IsUUID()
  @IsNotEmpty()
  category: string;

  @Field()
  description: string;
}
