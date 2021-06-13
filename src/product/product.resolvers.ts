import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductUpdateInput } from './dto/product-update.input';
import { ProducCreatetInput } from './dto/product-create.input';
import { ProductDTO } from './dto/productDTO';
import { ProductMapper } from './product.mapper';
import { ProductService } from './product.service';

@Resolver((of) => ProductDTO)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query((returns) => [ProductDTO])
  async getAllProducts(): Promise<ProductDTO[]> {
    const products = await this.productService.findAll();

    return products.map(ProductMapper.fromEntityToPublic);
  }

  @Query((returns) => ProductDTO)
  async getProductById(@Args('id') input: string): Promise<ProductDTO> {
    return ProductMapper.fromEntityToPublic(
      await this.productService.findById(input),
    );
  }

  @Mutation((returns) => ProductDTO)
  async createProduct(
    @Args('input') input: ProducCreatetInput,
  ): Promise<ProductDTO> {
    return ProductMapper.fromEntityToPublic(
      await this.productService.create(ProductMapper.toEmtity(input)),
    );
  }

  @Mutation((returns) => ProductDTO)
  async updateProduct(
    @Args('input') input: ProductUpdateInput,
  ): Promise<ProductDTO> {
    return ProductMapper.fromEntityToPublic(
      await this.productService.update(
        input.id,
        ProductMapper.updatedToEmtity(input),
      ),
    );
  }

  @Mutation((returns) => Boolean)
  async deleteProduct(@Args('id') id: string): Promise<boolean> {
    await this.productService.delete(id);
    return true;
  }
}
