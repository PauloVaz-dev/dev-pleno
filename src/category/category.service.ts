import { Inject, Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { ICategoryRepository } from './repositories/category.interface';

interface Request {
  name: string;
  slug: string;
}
@Injectable()
export class CategoryService {
  constructor(
    @Inject('CategoryRepositoryInterface')
    private categoryRepository: ICategoryRepository,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findById(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);
    if (!category) {
      throw new Error('Category is not exists.');
    }
    return category;
  }

  async findBySlug(slug: string): Promise<Category> {
    const category = await this.categoryRepository.findBySlug(slug);

    if (!category) {
      throw new Error('Category is not exists.');
    }
    return category;
  }

  async create(input: Request): Promise<Category> {
    const { slug, name } = input;

    const checkCategoryExists = await this.categoryRepository.findByName(name);

    if (checkCategoryExists) {
      throw new Error('Category already used.');
    }
    const category = await this.categoryRepository.create(input);

    return category;
  }

  async update(id: string, input: Request): Promise<Category> {
    const checkCategoryExists = await this.categoryRepository.findOne(id);

    if (!checkCategoryExists) {
      throw new Error('Category is not exists.');
    }

    const category = await this.categoryRepository.save({
      id,
      ...input,
    });
    return category;
  }

  async delete(id: string): Promise<boolean> {
    const checkCategoryExists = await this.categoryRepository.findOne(id);

    if (!checkCategoryExists) {
      throw new Error('Category not exist.');
    }
    try {
      await this.categoryRepository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
