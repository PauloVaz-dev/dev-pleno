import { InjectRepository } from '@nestjs/typeorm';
import { MaxResultsNumber } from 'aws-sdk/clients/glue';

import {
  ICreateStreamServer,
  IStreamServerRepository,
} from 'src/servers/repositories/stream-server.repository.interface';
import { Repository } from 'typeorm';
import { StreamServer } from '../entities/stream-server.entity';

interface Request {
  name: string;
}

export class StreamServerRepository implements IStreamServerRepository {
  constructor(
    @InjectRepository(StreamServer)
    private readonly repository: Repository<StreamServer>,
  ) {}

  async findById(id: number): Promise<StreamServer> {
    return this.repository.findOne(id);
  }

  async find(): Promise<StreamServer[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.repository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }

  async create({ name }: Request): Promise<StreamServer> {
    console.log('ddddddddddd', name);
    const category = this.repository.create({
      name,
    });

    await this.repository.save(category);
    return category;
  }

  async save({ id, name }: ICreateStreamServer): Promise<StreamServer> {
    const category = await this.repository.save({
      id,
      name,
    });

    return category;
  }
}
