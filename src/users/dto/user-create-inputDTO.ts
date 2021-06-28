import { Field, InputType } from '@nestjs/graphql';

enum rolesType {
  root = 'root',
  admin = 'admin',
}

@InputType()
export class UserCreateInputDTO {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  role: rolesType;
}
