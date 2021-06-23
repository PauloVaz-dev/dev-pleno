// import { StreamServerService } from './category.service';
// import { CategoryRepositoryInMemory } from './repositories/in-memory/category.repository.in-memory';
// import { StreamServerService } from './stream-server.service';

// let categoryService: StreamServerService;
// let categoryRepository: CategoryRepositoryInMemory;

// describe('StreamServer', () => {
//   beforeEach(async () => {
//     categoryRepository = new StreamServerRe();
//     categoryService = new CategoryService(categoryRepository);
//   });

//   it('should be able to add a new category', async () => {
//     const category = await categoryService.create({
//       name: 'Eletrodomestico',
//       slug: 'eletro',
//     });

//     expect(category).toHaveProperty('id');
//   });

//   it('should be able list all categories', async () => {
//     await categoryService.create({
//       name: 'Eletrodomestico',
//       slug: 'eletro',
//     });

//     await categoryService.create({
//       name: 'Cama/Mesa',
//       slug: 'cama',
//     });
//     const categories = await categoryService.findAll();

//     expect(categories).toHaveLength(2);
//   });

//   it('should not be able to create a new category with slug exists', async () => {
//     expect(async () => {
//       await categoryService.create({
//         name: 'Eletrodomestico',
//         slug: 'eletro',
//       });

//       await categoryService.create({
//         name: 'Eletrodomestico',
//         slug: 'eletro',
//       });
//     }).rejects.toThrow(Error('Category already used.'));
//   });

//   it('should be able delete one category', async () => {
//     const category = await categoryService.create({
//       name: 'Eletrodomedddstico',
//       slug: 'eletrdddo',
//     });

//     const categoryIfDeleted = await categoryService.delete(category.id);

//     expect(categoryIfDeleted).toBe(true);
//   });

//   it('should not be able delete an nonexistent category', async () => {
//     expect(async () => {
//       const category = await categoryService.create({
//         name: 'Eletrodomestico',
//         slug: 'eletro',
//       });

//       await categoryService.delete(category.id);
//     }).rejects.toThrow(Error('Category is not exists.'));
//   });

//   it('should retrieve a category with an ID', async () => {
//     const category = await categoryService.create({
//       name: 'Eletrodomestico',
//       slug: 'eletro',
//     });

//     const categoryUpdated = await categoryService.findById(category.id);

//     expect(categoryUpdated).toHaveProperty('id');
//   });

//   it('should be able update one category', async () => {
//     const category = await categoryService.create({
//       name: 'Eletrodomestico',
//       slug: 'eletro',
//     });

//     const categoryUpdated = await categoryService.update(category.id, {
//       name: 'teste',
//       slug: 'eletrdddo',
//     });

//     expect(categoryUpdated.name).toBe('teste');
//   });

//   it('should not be able update an nonexistent category', async () => {
//     expect(async () => {
//       await categoryService.create({
//         name: 'Eletrodomestico',
//         slug: 'eletro',
//       });

//       await categoryService.update('222222222222', {
//         name: 'teste',
//         slug: 'eletrdddo',
//       });
//     }).rejects.toThrow(Error('Category is not exists.'));
//   });
// });
