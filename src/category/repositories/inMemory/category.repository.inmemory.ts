import { Injectable } from '@nestjs/common';
import { Category } from '../../category.entity';
import { ICreateCategory, ICategoryRepository } from '../category.interface';

@Injectable()
export class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];

  async findOne(id: string): Promise<Category> {
    const category = this.categories.find((category) => category.id === id);
    return category;
  }

  async findByName(name: string): Promise<Category | null> {
    const category = this.categories.find((category) => category.name === name);
    return category || null;
  }

  async findBySlug(slug: string): Promise<Category> {
    const category = this.categories.find((category) => category.slug === slug);

    return category;
  }

  async delete(id: string): Promise<boolean> {
    const userToken = this.categories.find((category) => category.id === id);
    this.categories.splice(this.categories.indexOf(userToken));
    return true;
  }

  async find(): Promise<Category[]> {
    const list = this.categories;
    return list;
  }
  async create({ name, slug }: ICreateCategory): Promise<Category> {
    const category = new Category();

    Object.assign(category, {
      name,
      slug,
    });

    this.categories.push(category);

    return category;
  }

  async save({ id, name, slug }: ICreateCategory): Promise<Category> {
    const findIndex = this.categories.findIndex(
      (category) => category.id === id,
    );
    this.categories[findIndex].name = name;
    this.categories[findIndex].slug = slug;

    const category = {
      id,
      name,
      slug,
      created_at: new Date(),
      updated_at: new Date(),
    };
    return category;
  }
}
