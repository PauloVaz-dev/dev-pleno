import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsUUID, Validate } from 'class-validator';
import { type } from 'os';
import { UserEmailIsUnique } from '../validations/UserEmailIsUnique';

enum rolesType {
  root = 'root',
  admin = 'admin',
}

@InputType()
export class UserUpdateInputDTO {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  @IsEmail()
  //@Validate(UserEmailIsUnique)
  email: string;

  @Field()
  role: rolesType;

  @Field({ nullable: true })
  password: string;
}
