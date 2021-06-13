import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { ProductService } from '../product.service';

@ValidatorConstraint({ name: 'categorySlugIsUnique', async: true })
export class ProductSlugIsUnique implements ValidatorConstraintInterface {
  constructor(private readonly productService: ProductService) {}
  async validate(
    text: string,
    validationArguments: ValidationArguments,
  ): Promise<boolean> {
    const id = validationArguments.object['id'];
    const product = await this.productService.findBySlug(text);
    if (product) {
      if (id === product.id) {
        return true;
      }
      return false;
    }
    return true;
  }

  defaultMessage(args: ValidationArguments): string {
    return 'Slug must de unique';
  }
}
