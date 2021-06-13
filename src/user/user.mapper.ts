import { User } from './user.entity';
import { UserCreateInputDTO } from './dto/user-create-inputDTO';
import { UserDTO } from './dto/userDTO';

export class UserMapper {
  public static toEmtity(input: UserCreateInputDTO): User {
    const entity = new User();
    entity.name = input.name;
    entity.email = input.email;
    entity.role = input.role;

    return entity;
  }
}
