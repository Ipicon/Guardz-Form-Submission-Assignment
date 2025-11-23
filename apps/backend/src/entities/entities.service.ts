import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dto/create-entity.dto';

@Injectable()
export class EntitiesService {
  create(createEntityDto: CreateEntityDto) {
    return 'This action adds a new entity';
  }

  findAll() {
    return `This action returns all entities`;
  }
}
