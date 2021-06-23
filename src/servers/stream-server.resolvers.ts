import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StreamServerCreateInputDTO } from './dto/stream-server-create-inputDTO';
import { StreamServerUpdateInputDTO } from './dto/stream-server-update-inputDTO';
import { StreamServerDTO } from './dto/stream-serverDTO';
import { StreamServerService } from './stream-server.service';

@Resolver((of) => StreamServerDTO)
export class StreamServerResolver {
  constructor(private readonly streamServerService: StreamServerService) {}

  @Mutation((returns) => Boolean)
  async deleteStreamServer(@Args('id') input: number): Promise<boolean> {
    return this.streamServerService.delete(input);
  }

  @Mutation((returns) => StreamServerDTO)
  async updateStreamServer(
    @Args('input') input: StreamServerUpdateInputDTO,
  ): Promise<StreamServerDTO> {
    const { id } = input;

    return this.streamServerService.update(id, input);
  }
}
