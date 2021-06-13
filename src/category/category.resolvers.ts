import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto/categoryDTO';
import { CategoryCreateInputDTO } from './dto/category-create-inputDTO';
import { CategoryUpdateInputDTO } from './dto/category-update-inputDTO';

@Resolver((of) => CategoryDTO)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query((returns) => [CategoryDTO])
  async getAllCategories(): Promise<CategoryDTO[]> {
    return await this.categoryService.findAll();
  }

  @Query((returns) => CategoryDTO)
  async getCategoryById(@Args('id') input: string): Promise<CategoryDTO> {
    return await this.categoryService.findById(input);
  }

  @Query((returns) => CategoryDTO)
  async getCategoryBySlug(@Args('slug') slug: string): Promise<CategoryDTO> {
    return await this.categoryService.findBySlug(slug);
  }

  @Mutation((returns) => Boolean)
  async deleteCategory(@Args('id') input: string): Promise<boolean> {
    return this.categoryService.delete(input);
  }

  @Mutation((returns) => CategoryDTO)
  async createCategory(
    @Args('input') input: CategoryCreateInputDTO,
  ): Promise<CategoryDTO> {
    return this.categoryService.create({
      ...input,
    });
  }

  @Mutation((returns) => CategoryDTO)
  async updateCategory(
    @Args('input') input: CategoryUpdateInputDTO,
  ): Promise<CategoryDTO> {
    const { id } = input;

    return this.categoryService.update(id, input);
  }
}
