import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './dto/userDTO';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createAndSave(createUserInput: UserDTO): Promise<User> {
    const user = await this.save(this.create(createUserInput));
    return await this.findById(user.id);
  }

  async findAll(): Promise<User[]> {
    return this.find();
  }

  async findById(id: string): Promise<User> {
    return await this.findOne(id);
  }

  async findAndUpdate(dbUser: User, data: UserDTO): Promise<User> {
    await this.update(dbUser.id, { ...data });
    const updatedUser = this.create({ ...dbUser, ...data });
    return updatedUser;
  }

  async deleteById(id: string): Promise<boolean> {
    await this.delete(id);
    return true;
  }
}
