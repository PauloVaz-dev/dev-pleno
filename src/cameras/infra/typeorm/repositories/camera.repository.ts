import { InjectRepository } from '@nestjs/typeorm';
import { Number } from 'aws-sdk/clients/iot';

import {
  ICameraRepository,
  ICreateCamera,
} from 'src/cameras/repositories/camera.repository.interface';
import { Repository } from 'typeorm';

import { Camera } from '../entities/camera.entity';

export class CameraRepository implements ICameraRepository {
  constructor(
    @InjectRepository(Camera)
    private readonly repository: Repository<Camera>,
  ) {}

  async findByStream(name: string): Promise<Camera> {
    return this.repository.findOne({
      where: { streamid: name },
    });
  }

  async find(): Promise<Camera[]> {
    const productsQuery = this.repository
      .createQueryBuilder('camera')
      .leftJoinAndSelect('camera.account', 'accounts');

    const cameras = await productsQuery.getMany();

    return cameras;
  }

  async findById(id: number): Promise<Camera | null> {
    const account = await this.repository.findOne({
      where: {
        id,
      },
    });
    return account || null;
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.repository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }

  async create({ url, account, streamid }: ICreateCamera): Promise<Camera> {
    const camera = this.repository.create({
      url,
      account_id: account,
      streamid,
    });

    await this.repository.save(camera);
    return camera;
  }

  async save({ id, url, account, streamid }: ICreateCamera): Promise<Camera> {
    const camera = await this.repository.save({
      id,
      url,
      streamid,
      account_id: account,
    });

    return camera;
  }
}
