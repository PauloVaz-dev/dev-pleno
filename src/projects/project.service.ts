import { Inject, Injectable } from '@nestjs/common';
import { Project } from './infra/typeorm/entities/project.entity';
import {
  IProjectRepository,
  ICreateProject,
} from './repositories/project.repository.interface';

@Injectable()
export class ProjectService {
  constructor(
    @Inject('ProjectRepositoryInterface')
    private projectRepository: IProjectRepository,
  ) {}

  async create(input: ICreateProject): Promise<Project> {
    const { name } = input;

    const checkProjectExists = await this.projectRepository.findByName(name);

    if (checkProjectExists.length > 0) {
      throw new Error('Project already exists.');
    }
    const projetc = await this.projectRepository.create(input);

    return projetc;
  }

  async findAll(): Promise<Project[]> {
    const projects = await this.projectRepository.find();

    return projects;
  }

  async update(id: number, input: ICreateProject): Promise<Project> {
    const checkProjectExists = await this.projectRepository.findById(id);

    if (!checkProjectExists) {
      throw new Error('Project is not exists.');
    }

    const category = await this.projectRepository.save({
      id,
      ...input,
    });
    return category;
  }

  async delete(id: number): Promise<boolean> {
    const checkCategoryExists = await this.projectRepository.findById(id);

    if (!checkCategoryExists) {
      throw new Error('Project is not exist.');
    }
    try {
      await this.projectRepository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
