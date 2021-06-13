import { Category } from './category.entity';
import { CategoryCreateInputDTO } from './dto/category-create-inputDTO';

export class CategoryMapper {
  public static toEntity(input: CategoryCreateInputDTO): Category {
    const categoryEntity = new Category();
    categoryEntity.name = input.name;
    categoryEntity.slug = input.slug;
    return categoryEntity;
  }
}
