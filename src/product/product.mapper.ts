import { Product } from './product.entity';
import { ProducCreatetInput } from './dto/product-create.input';
import { Category } from 'src/category/category.entity';
import { ProductUpdateInput } from './dto/product-update.input';
import { ProductDTO } from './dto/productDTO';
import { CategoryDTO } from 'src/category/dto/categoryDTO';

export class ProductMapper {
  public static toEmtity(input: ProducCreatetInput): Product {
    const entity = new Product();
    entity.name = input.name;
    entity.slug = input.slug;
    entity.description = input.description;

    const category = new Category();
    category.id = input.category;
    entity.category = category;
    console.log(entity);
    return entity;
  }

  public static updatedToEmtity(input: ProductUpdateInput): Product {
    const entity = new Product();
    entity.id = input.id;
    entity.name = input.name;
    entity.slug = input.slug;
    entity.description = input.description;

    const category = new Category();

    category.id = input.category;
    entity.category = category;
    console.log(entity);

    return entity;
  }

  public static fromEntityToPublic(input: Product): ProductDTO {
    const entity = new ProductDTO();
    entity.id = input.id;
    entity.name = input.name;
    entity.slug = input.slug;
    entity.description = input.description;
    entity.category = input.category;
    return entity;
  }
}
