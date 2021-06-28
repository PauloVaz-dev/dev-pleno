import { Inject, Injectable } from '@nestjs/common';
import { IAccountRepository } from 'src/accounts/repositories/account.repository.interface';
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
    @Inject('AccountRepositoryInterface')
    private accountRepository: IAccountRepository,
  ) {}

  async findAll(): Promise<Camera[]> {
    const accounts = await this.cameraRepository.find();
    return accounts;
  }

  async findByName(name: string): Promise<Camera> {
    const camera = await this.cameraRepository.findByStream(name);
    return camera;
  }

  async create(input: IRequest): Promise<Camera> {
    const { streamid, url, account } = input;

    const checkAccountExists = await this.accountRepository.findById(account);

    if (!checkAccountExists) {
      throw new Error('Account is not exists.');
    }

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
      throw new Error('Camera is not exists.');
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
    const checkCameraExists = await this.cameraRepository.findById(id);

    if (!checkCameraExists) {
      throw new Error('Camera is not exists.');
    }
    try {
      await this.cameraRepository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
