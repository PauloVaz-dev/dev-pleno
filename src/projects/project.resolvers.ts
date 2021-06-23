import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { ProjectCreateInputDTO } from './dto/project-create-inputDTO';
import { ProjectUpdateInputDTO } from './dto/project-update-inputDTO';
import { ProjectDTO } from './dto/projectDTO';
import { ProjectService } from './project.service';

@Resolver((of) => ProjectDTO)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation((returns) => ProjectDTO)
  async createProject(
    @Args('input') input: ProjectCreateInputDTO,
  ): Promise<ProjectDTO> {
    return this.projectService.create({
      ...input,
    });
  }

  @Query((returns) => [ProjectDTO])
  async getAllProjects(): Promise<ProjectDTO[]> {
    return await this.projectService.findAll();
  }

  @Mutation((returns) => ProjectDTO)
  async updateProject(
    @Args('input') input: ProjectUpdateInputDTO,
  ): Promise<ProjectDTO> {
    const { id } = input;

    return this.projectService.update(id, input);
  }

  @Mutation((returns) => Boolean)
  async deleteProject(@Args('id') input: number): Promise<boolean> {
    return this.projectService.delete(input);
  }
}
