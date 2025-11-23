import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { CreateEntityDto } from '../src/entities/dto/create-entity.dto';
import { createGlobalPipes } from '../src/utils';

describe('Entities API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(createGlobalPipes());

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /entities should return [] initially', async () => {
    const res = await request(app.getHttpServer()).get('/entities');

    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /entities should create an entity', async () => {
    const payload: CreateEntityDto = {
      name: 'max',
      email: 'max@shulov.com',
      age: 25,
      about: 'Hello',
    };

    const res = await request(app.getHttpServer())
      .post('/entities')
      .send(payload);

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(payload);
  });

  it('POST /entities should fail on validation error', async () => {
    const res = await request(app.getHttpServer()).post('/entities').send({
      name: '',
      email: 'not-an-email',
      age: 'abc',
    });

    expect(res.status).toBe(400);
  });

  it('GET /entities should now return 1 entity', async () => {
    const res = await request(app.getHttpServer()).get('/entities');
    
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
  });
});
