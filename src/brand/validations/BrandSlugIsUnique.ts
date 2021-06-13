import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { BrandService } from '../brand.service';

@ValidatorConstraint({ name: 'categorySlugIsUnique', async: true })
export class BarndSlugIsUnique implements ValidatorConstraintInterface {
  constructor(private readonly brandService: BrandService) {}
  async validate(
    text: string,
    validationArguments: ValidationArguments,
  ): Promise<boolean> {
    const id = validationArguments.object['id'];
    const category = await this.brandService.findBySlug(text);
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
    return 'Slug must de unique';
  }
}
