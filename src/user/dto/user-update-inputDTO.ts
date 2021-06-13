import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsUUID, Validate } from 'class-validator';
import { UserEmailIsUnique } from '../validations/UserEmailIsUnique';

@InputType()
export class UserUpdateInputDTO {
  @Field()
  @IsUUID()
  id: string;

  @Field()
  name: string;

  @Field()
  @IsEmail()
  //@Validate(UserEmailIsUnique)
  email: string;

  @Field()
  role: string;

  @Field()
  password: string;
}
