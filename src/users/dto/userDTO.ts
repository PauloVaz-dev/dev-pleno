import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserRoleType } from '../infra/typeorm/entities/user.entity';

@ObjectType()
export class UserDTO {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  role: UserRoleType;
}
