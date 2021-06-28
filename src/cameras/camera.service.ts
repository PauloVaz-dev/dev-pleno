import { Inject, Injectable } from '@nestjs/common';
import { Camera } from './infra/typeorm/entities/camera.entity';
import { ICameraRepository } from './repositories/camera.repository.interface';

interface IRequest {
  id?: number;
  streamid: string;
  url: string;
  account?: number;
}

@Injectable()
export class CameraService {
  constructor(
    @Inject('CameraRepositoryInterface')
    private cameraRepository: ICameraRepository,
  ) {}

  async findAll(): Promise<Camera[]> {
    const accounts = await this.cameraRepository.find();
    return accounts;
  }

  async findByName(name: string): Promise<Camera[]> {
    const accounts = await this.cameraRepository.findByStream(name);
    return accounts;
  }

  async create(input: IRequest): Promise<Camera> {
    const { streamid, url, account } = input;

    const checkStreamExists = await this.cameraRepository.findByStream(
      streamid,
    );

    if (checkStreamExists) {
      throw new Error('Stream already used.');
    }

    return this.cameraRepository.create({ streamid, url, account });
  }

  async update(id: number, input: IRequest): Promise<Camera> {
    const { streamid, url, account } = input;
    const checkAccountExists = await this.cameraRepository.findById(id);

    if (!checkAccountExists) {
      throw new Error('Account is not exists.');
    }

    const product = await this.cameraRepository.save({
      id,
      streamid,
      url,
      account,
    });
    return product;
  }

  async delete(id: number): Promise<boolean> {
    const checkProductExists = await this.cameraRepository.findById(id);

    if (!checkProductExists) {
      throw new Error('Account is not exists.');
    }
    try {
      await this.cameraRepository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
