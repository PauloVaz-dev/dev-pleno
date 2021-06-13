import { Injectable } from '@nestjs/common';
import { OmitType } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { S3 } from 'src/utils/s3';
import { Repository } from 'typeorm';
import { Brand } from './brand.entity';
import * as fs from 'fs';
import { String } from 'aws-sdk/clients/acm';

interface Request {
  name: string;
  email: string;
}

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
    private s3: S3,
  ) {}

  async findAll(): Promise<Brand[]> {
    return this.brandRepository.find();
  }

  async findById(id: string): Promise<Brand> {
    return this.brandRepository.findOne(id);
  }

  async findBySlug(id: string): Promise<Brand> {
    return this.brandRepository.findOne({
      where: [{ slug: id }],
    });
  }

  async create(input: Omit<Brand, 'id'>): Promise<Brand> {
    return this.brandRepository.save(input);
  }

  async uploadLogo(
    id: string,
    createReadStream: () => any,
    filename: string,
    mimetype: string,
  ): Promise<string> {
    const stream = createReadStream();
    const url = await this.s3.upload(
      stream,
      mimetype,
      'devshop-vaz2',
      id + '-' + filename,
    );

    await this.brandRepository.update(id, {
      logo: url,
    });
    return null;
  }

  async update(input: Brand): Promise<Brand> {
    await this.brandRepository.update(input.id, {
      name: input.name,
      slug: input.slug,
    });
    return input;
  }

  async delete(id: string): Promise<boolean> {
    const checkBarndExists = await this.brandRepository.findOne(id);

    if (!checkBarndExists) {
      throw new Error('Brand not exist.');
    }
    try {
      await this.brandRepository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
