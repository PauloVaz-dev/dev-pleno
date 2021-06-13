import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';

import { Category } from './category.entity';
import {
  ICategoryRepository,
  ICreateCategory,
} from './repositories/category.interface';

interface Request {
  name: string;
  slug: string;
}

export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
  ) {}

  async find(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.repository.findOne(id);
    return category;
  }
  async findBySlug(slug: string): Promise<Category> {
    const category = await this.repository.findOne({
      where: {
        slug,
      },
    });
    return category;
  }

  async findName(name: string): Promise<Category | null> {
    const category = await this.repository.findOne({
      where: {
        name,
      },
    });
    return category || null;
  }
  async delete(id: string): Promise<boolean> {
    try {
      await this.repository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }

  async findByName(name: string): Promise<Category | null> {
    const findInSameName = await this.repository.findOne({
      where: {
        name,
      },
    });
    return findInSameName || null;
  }

  async create({ name, slug }: Request): Promise<Category> {
    const category = this.repository.create({
      name,
      slug,
    });

    await this.repository.save(category);
    return category;
  }

  async save({ id, name, slug }: ICreateCategory): Promise<Category> {
    const category = await this.repository.save({
      id,
      name,
      slug,
    });

    return category;
  }
}
