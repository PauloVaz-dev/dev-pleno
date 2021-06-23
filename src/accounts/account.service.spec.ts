import { visitErrors } from 'graphql-tools';
import { ProductService } from './product.service';
import { ProductRepositoryInMemory } from './repositories/in-memory/product.repository.in-memory';

let productService: ProductService;
let productRepository: ProductRepositoryInMemory;

describe('Product', () => {
  beforeEach(async () => {
    productRepository = new ProductRepositoryInMemory();
    productService = new ProductService(productRepository);
  });

  //   it('should be able to add a new product', async () => {
  //     const category = await productService.create({
  //       name: 'Eletrodomestico',
  //       slug: 'eletro',
  //       description: 'teste',
  //     });

  //     expect(category).toHaveProperty('id');
  //   });

  //   it('should be able list all products', async () => {
  //     await productService.create({
  //       name: 'Eletrodomestico',
  //       slug: 'eletro',
  //       description: 'teste',
  //     });

  //     await productService.create({
  //       name: 'TELEVISÃO',
  //       slug: 'audi1',
  //       description: 'teste',
  //     });
  //     const categories = await productService.findAll();

  //     expect(categories).toHaveLength(2);
  //   });

  //   it('should not be able to create a new product with slug exists', async () => {
  //     await productService.create({
  //       name: 'Eletrodomestico',
  //       slug: 'eletro',
  //       description: 'teste',
  //     });
  //     expect(async () => {
  //       await productService.create({
  //         name: 'Eletrodomestico',
  //         slug: 'eletro',
  //         description: 'teste',
  //       });
  //     }).rejects.toEqual(new Error('Productss already used.'));
  //   });

  //   it('should be able delete one product', async () => {
  //     const category = await productService.create({
  //       name: 'Eletrodomedddstico',
  //       slug: 'eletrdddo',
  //       description: 'teste',
  //     });

  //     const categoryIfDeleted = await productService.delete(category.id);

  //     expect(categoryIfDeleted).toBe(true);
  //   });

  it('should not be able delete an nonexistent product', () => {
    expect(async () => {
      await productService.delete('sssssssssss');
    }).rejects.toBeInstanceOf(visitErrors);
  });

  //   it('should retrieve a product with an ID', async () => {
  //     const category = await productService.create({
  //       name: 'Eletrodomestico',
  //       slug: 'eletro',
  //       description: 'teste',
  //     });

  //     const categoryUpdated = await productService.findById(category.id);

  //     expect(categoryUpdated).toHaveProperty('id');
  //   });

  //   it('should be able update one product', async () => {
  //     const category = await productService.create({
  //       name: 'Eletrodomestico',
  //       slug: 'eletro',
  //       description: 'teste',
  //     });

  //     const categoryUpdated = await productService.update(category.id, {
  //       name: 'teste',
  //       slug: 'eletrdddo',
  //       description: 'teste',
  //     });

  //     expect(categoryUpdated.name).toBe('teste');
  //   });

  //   it('should not be able update an nonexistent category', async () => {
  //     expect(async () => {
  //       const category = await categoryService.create({
  //         name: 'Eletrodomestico',
  //         slug: 'eletro',
  //       });

  //       await categoryService.update('222222222222', {
  //         name: 'teste',
  //         slug: 'eletrdddo',
  //       });
  //     }).rejects.toThrow(Error('Category is not exists.'));
  //   });
});
