import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateInputDTO {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  role: string;
}
