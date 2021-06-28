import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CameraService } from './camera.service';
import { CameraCreateInput } from './dto/camera.create.input';
import { CameraDTO } from './dto/cameraDTO';
import { CameraUpdateInput } from './dto/cameta-update.input';

@Resolver((of) => CameraDTO)
export class CameraResolver {
  constructor(private readonly cameraService: CameraService) {}

  @Mutation((returns) => CameraDTO)
  async createCamera(
    @Args('input') input: CameraCreateInput,
  ): Promise<CameraDTO> {
    return await this.cameraService.create(input);
  }

  @Query((returns) => [CameraDTO])
  async getAllCameras(): Promise<CameraDTO[]> {
    const accounts = await this.cameraService.findAll();
    return accounts;
  }

  @Mutation((returns) => CameraDTO)
  async updateCamera(
    @Args('input') input: CameraUpdateInput,
  ): Promise<CameraDTO> {
    return await this.cameraService.update(input.id, input);
  }

  @Mutation((returns) => Boolean)
  async deleteCamera(@Args('id') id: number): Promise<boolean> {
    await this.cameraService.delete(id);
    return true;
  }
}
