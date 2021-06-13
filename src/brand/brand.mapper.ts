import { Brand } from './brand.entity';
import { BrandCreateInputDTO } from './dto/brand-create-inputDTO';
import { BrandDTO } from './dto/brandDTO';

export class BrandMapper {
  public static toEmtity(input: BrandCreateInputDTO): Brand {
    const categoryEntity = new BrandDTO();
    categoryEntity.name = input.name;
    categoryEntity.slug = input.slug;
    return categoryEntity;
  }

  public static fromEntityToPublic(entity: Brand): BrandDTO {
    const brand = new BrandDTO();
    brand.id = entity.id;
    brand.name = entity.name;
    brand.slug = entity.slug;
    return brand;
  }
}
