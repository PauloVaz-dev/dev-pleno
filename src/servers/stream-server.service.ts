import { Inject, Injectable } from '@nestjs/common';
import { StreamServer } from './infra/typeorm/entities/stream-server.entity';
import {
  ICreateStreamServer,
  IStreamServerRepository,
} from './repositories/stream-server.repository.interface';

@Injectable()
export class StreamServerService {
  constructor(
    @Inject('StreamServerRepositoryInterface')
    private streamServerRepository: IStreamServerRepository,
  ) {}

  async update(id: number, input: ICreateStreamServer): Promise<StreamServer> {
    const checkProjectExists = await this.streamServerRepository.findById(id);

    if (!checkProjectExists) {
      throw new Error('StreamServer is not exists.');
    }

    const serverStream = await this.streamServerRepository.save({
      id,
      ...input,
    });
    return serverStream;
  }

  async delete(id: number): Promise<boolean> {
    const checkCategoryExists = await this.streamServerRepository.findById(id);

    if (!checkCategoryExists) {
      throw new Error('Project is not exist.');
    }
    try {
      await this.streamServerRepository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
