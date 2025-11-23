import { Test, TestingModule } from '@nestjs/testing';
import { EntitiesService } from './entities.service';
import { CreateEntityDto } from './dto/create-entity.dto';

describe('EntitiesService', () => {
  let service: EntitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntitiesService],
    }).compile();

    service = module.get<EntitiesService>(EntitiesService);
  });

  it('should start with an empty list', () => {
    expect(service.findAll()).toEqual([]);
  });

  it('should create an entity', () => {
    const dto: CreateEntityDto = {
      name: 'Max',
      email: 'max@shulov.com',
      age: 22,
      about: 'Hello',
    };

    const result = service.create(dto);

    expect(result).toMatchObject(dto);
    expect(service.findAll()).toHaveLength(1);
  });

  it('should assign unique IDs', () => {
    const a = service.create({ name: 'A', email: 'a@a.com', age: 20 });
    const b = service.create({ name: 'B', email: 'b@b.com', age: 25 });

    expect(a.id).toBeDefined();
    expect(b.id).toBeDefined();
    expect(a.id).not.toEqual(b.id);
  });
});
