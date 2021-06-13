import { Injectable } from '@nestjs/common';
import { OmitType } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findById(id: string): Promise<Product> {
    const productId = await this.productRepository.findOne(id, {
      relations: ['category'],
    });
    console.log(productId);
    return productId;
  }

  async findBySlug(id: string): Promise<Product> {
    return this.productRepository.findOne({
      where: [{ slug: id }],
    });
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({
      relations: ['category'],
    });
  }

  async create(input: Product): Promise<Product> {
    return this.productRepository.save(input);
  }

  async update(id: string, input: Product): Promise<Product> {
    await this.productRepository.update(id, {
      ...input,
    });
    return input;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.productRepository.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
