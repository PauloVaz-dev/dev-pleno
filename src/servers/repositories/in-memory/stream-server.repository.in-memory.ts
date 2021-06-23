import { Injectable } from '@nestjs/common';
import { StreamServer } from 'src/servers/infra/typeorm/entities/stream-server.entity';
import { IStreamServerRepository } from '../stream-server.repository.interface';

export interface ICreateStreamServer {
  id?: number;
  name: string;
}

@Injectable()
export class StreamServerRepositoryInMemory implements IStreamServerRepository {
  findById(id: number): Promise<StreamServer> {
    throw new Error('Method not implemented.');
  }
  categories: StreamServer[] = [];

  async findOne(id: number): Promise<StreamServer> {
    const category = this.categories.find((category) => category.id === id);
    return category;
  }

  async findByName(name: string): Promise<StreamServer | null> {
    const category = this.categories.find((category) => category.name === name);
    return category || null;
  }

  async delete(id: number): Promise<boolean> {
    const userToken = this.categories.find((category) => category.id === id);
    this.categories.splice(this.categories.indexOf(userToken));
    return true;
  }

  async find(): Promise<StreamServer[]> {
    const list = this.categories;
    return list;
  }
  async create({ name }: ICreateStreamServer): Promise<StreamServer> {
    const category = new StreamServer();

    Object.assign(category, {
      name,
    });

    this.categories.push(category);

    return category;
  }

  async save({ id, name }: ICreateStreamServer): Promise<StreamServer> {
    const findIndex = this.categories.findIndex(
      (category) => category.id === id,
    );
    this.categories[findIndex].name = name;

    const category = {
      id,
      name,
    };
    return category;
  }
}
