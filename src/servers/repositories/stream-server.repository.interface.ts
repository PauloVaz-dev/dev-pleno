import { StreamServer } from '../infra/typeorm/entities/stream-server.entity';

export interface ICreateStreamServer {
  id?: number;
  name: string;
}

export interface IStreamServerRepository {
  delete(id: number): Promise<boolean>;
  save({ id, name }: ICreateStreamServer): Promise<StreamServer>;
  find(): Promise<StreamServer[]>;
  findById(id: number): Promise<StreamServer>;
}
