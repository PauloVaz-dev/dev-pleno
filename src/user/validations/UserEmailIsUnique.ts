import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { UserService } from '../user.service';

@ValidatorConstraint({ name: 'userEmailIsUnique', async: true })
export class UserEmailIsUnique implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}
  async validate(
    text: string,
    validationArguments: ValidationArguments,
  ): Promise<boolean> {
    const id = validationArguments.object['id'];
    const category = await this.userService.findByEmail(text);
    if (category) {
      if (id === category.id) {
        return true;
      }
      return false;
    }
    return true;
  }

  defaultMessage(args: ValidationArguments): string {
    console.log(args);
    return 'Email must to be unique';
  }
}
