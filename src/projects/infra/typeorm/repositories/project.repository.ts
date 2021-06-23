import { InjectRepository } from '@nestjs/typeorm';
import {
  IProjectRepository,
  ICreateProject,
} from 'src/projects/repositories/project.repository.interface';

import { Like, Repository } from 'typeorm';
import { Project } from '../entities/project.entity';

interface Request {
  name: string;
}

export class ProjectRepository implements IProjectRepository {
  constructor(
    @InjectRepository(Project)
    private readonly repository: Repository<Project>,
  ) {}

  async findByName(name: string): Promise<Project[]> {
    const project = await this.repository.find({
      where: {
        name: Like(`%${name}%`),
      },
    });

    return project;
  }

  async findById(id: number): Promise<Project> {
    const project = await this.repository.findOne(id);
    return project;
  }

  async find(): Promise<Project[]> {
    const projects = await this.repository.find();

    return projects;
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.repository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }

  async create({ name }: Request): Promise<Project> {
    const project = this.repository.create({
      name,
    });

    await this.repository.save(project);
    return project;
  }

  async save({ id, name }: ICreateProject): Promise<Project> {
    const project = await this.repository.save({
      id,
      name,
    });

    return project;
  }
}
