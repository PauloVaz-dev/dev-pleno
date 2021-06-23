import { Injectable } from '@nestjs/common';
import { Project } from 'src/projects/infra/typeorm/entities/project.entity';

import {
  IProjectRepository,
  ICreateProject,
} from '../project.repository.interface';

@Injectable()
export class ProjectRepositoryInMemory implements IProjectRepository {
  projects: Project[] = [];

  findByName(name: string): Promise<Project[]> {
    throw new Error('Method not implemented.');
  }

  async findById(id: number): Promise<Project> {
    const project = this.projects.find((project) => project.id === id);
    return project;
  }

  async delete(id: number): Promise<boolean> {
    const userToken = this.projects.find((category) => category.id === id);
    this.projects.splice(this.projects.indexOf(userToken));
    return true;
  }

  async find(): Promise<Project[]> {
    const list = this.projects;
    return list;
  }
  async create({ name }: ICreateProject): Promise<Project> {
    const project = new Project();

    Object.assign(project, {
      name,
    });

    this.projects.push(project);

    return project;
  }

  async save({ id, name }: ICreateProject): Promise<Project> {
    const findIndex = this.projects.findIndex((category) => category.id === id);
    this.projects[findIndex].name = name;

    const project = {
      id,
      name,
    };
    return project;
  }
}
