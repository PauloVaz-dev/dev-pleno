import { Category } from '../category.entity';

export interface ICreateCategory {
  id?: string;
  name: string;
  slug: string;
}

export interface ICategoryRepository {
  find(): Promise<Category[]>;
  findOne(id: string): Promise<Category>;
  findBySlug(slug: string): Promise<Category>;
  findByName(name: string): Promise<Category>;
  create(input: ICreateCategory): Promise<Category>;
  delete(id: string): Promise<boolean>;
  save({ id, name, slug }: ICreateCategory): Promise<Category>;
}
