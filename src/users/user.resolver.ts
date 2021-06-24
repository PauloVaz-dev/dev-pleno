import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDTO } from './dto/userDTO';
//import { UserMapper } from './user.mapper';
import { UserCreateInputDTO } from './dto/user-create-inputDTO';
import { UserUpdateInputDTO } from './dto/user-update-inputDTO';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
  role: string;
}

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  //   @Query((returns) => UserDTO)
  //   async getUserById(@Args('id') input: string): Promise<UserDTO> {
  //     return await this.userService.findById(input);
  //   }

  //   @Query((returns) => [UserDTO])
  //   async getAllUsers(): Promise<UserDTO[]> {
  //     return await this.userService.findAll();
  //   }

  //   @Mutation((returns) => UserDTO)
  //   async createUser(@Args('input') input: UserCreateInputDTO): Promise<UserDTO> {
  //     return this.userService.create({
  //       ...input,
  //     });
  //   }

  //   @Mutation((returns) => UserDTO)
  //   async updateUser(@Args('input') input: UserUpdateInputDTO): Promise<UserDTO> {
  //     const { id } = input;
  //     return this.userService.update(id, input);
  //   }

  //   @Mutation((returns) => Boolean)
  //   async deleteUser(@Args('id') input: string): Promise<boolean> {
  //     return this.userService.delete(input);
  //   }
}
