import { String } from 'aws-sdk/clients/iot';
import { NumberOfBytesType } from 'aws-sdk/clients/kms';
import { Camera } from '../infra/typeorm/entities/camera.entity';

export interface ICreateCamera {
  id?: number;
  streamid: string;
  url: string;
  account: number;
}

export interface ICameraRepository {
  find(): Promise<Camera[]>;
  findByStream(name: string): Promise<Camera>;
  findById(id: number): Promise<Camera>;
  create(input: ICreateCamera): Promise<Camera>;
  delete(id: number): Promise<boolean>;
  save({ id, url, streamid, account }: ICreateCamera): Promise<Camera>;
}
