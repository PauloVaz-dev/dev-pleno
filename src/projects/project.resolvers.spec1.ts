import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectRepository } from './infra/typeorm/repositories/project.repository';

describe('Project (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        ProjectService,
        {
          provide: 'StreamServerRepositoryInterface',
          useClass: ProjectRepository,
        },
      ],
    })
      //   .overrideProvider('CategoryRepositoryInterface')
      //   .useClass(categoryRepositoryInMemory)
      .compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  afterAll(async () => {
    await Promise.all([app.close()]);
  });

  it('should be able list all categories', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({
        query: 'query { getAllCategories { id  } }',
      })
      .expect(200);

    console.log(response.body.data);
    //expect(response.body.data.getAllCategories).toHaveLength(2);
  });

  //   it('should be able create a new category', async () => {
  //     await request(app.getHttpServer())
  //       .post('/graphql')
  //       .set('Content-Type', 'application/json')
  //       .set('Accept', 'application/json')
  //       .send({
  //         query:
  //           'mutation { createCategory(input: {name: "Eletrodomesticos", slug: "Eletro" }) { id  } }',
  //       })
  //       .expect(200);

  //     await request(app.getHttpServer())
  //       .post('/graphql')
  //       .set('Content-Type', 'application/json')
  //       .set('Accept', 'application/json')
  //       .send({
  //         query:
  //           'mutation { createCategory(input: {name: "Eletrodomesticos1", slug: "Eletro1" }) { id  } }',
  //       })
  //       .expect(200);

  //     const response = await request(app.getHttpServer())
  //       .post('/graphql')
  //       .send({ query: '{ getAllCategories { id  } }' })
  //       .expect(200);

  //     expect(response.body.data.getAllCategories).toHaveLength(2);
  //   });
});
