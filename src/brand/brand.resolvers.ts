import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BrandService } from './brand.service';
import { BrandDTO } from './dto/brandDTO';
import { GraphQLUpload } from 'apollo-server-express';
import { FileUpload } from 'graphql-upload';

@Resolver((of) => BrandDTO)
export class BarndResolver {
  constructor(private readonly brandService: BrandService) {}

  @Query((returns) => [BrandDTO])
  async getAllBrands(): Promise<BrandDTO[]> {
    return await this.brandService.findAll();
  }

  @Query((returns) => BrandDTO)
  async getBrandById(@Args('id') input: string): Promise<BrandDTO> {
    return await this.brandService.findById(input);
  }

  @Mutation((returns) => Boolean)
  async deleteBrand(@Args('id') input: string): Promise<boolean> {
    return this.brandService.delete(input);
  }

  // @Mutation((returns) => BrandDTO)
  // async createBrand(@Args('id') input: BrandDTO): Promise<BrandDTO> {
  //   return this.brandService.create(BrandMapper.toEmtity(input));
  // }

  @Mutation((returns) => Boolean)
  async uploadBrandLogo(
    @Args('id') id: string,
    @Args('file', { type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<boolean> {
    const { createReadStream, filename, mimetype } = await file;
    console.log(createReadStream, filename, mimetype);
    const url = await this.brandService.uploadLogo(
      id,
      createReadStream,
      filename,
      mimetype,
    );
    return true;
  }
}
