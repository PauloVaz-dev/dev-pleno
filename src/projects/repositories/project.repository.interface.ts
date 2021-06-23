import { Project } from '../infra/typeorm/entities/project.entity';

export interface ICreateProject {
  id?: number;
  name: string;
}

export interface IProjectRepository {
  find(): Promise<Project[]>;
  findById(id: number): Promise<Project>;
  findByName(name: string): Promise<Project[]>;
  create(input: ICreateProject): Promise<Project>;
  delete(id: number): Promise<boolean>;
  save({ id, name }: ICreateProject): Promise<Project>;
}
