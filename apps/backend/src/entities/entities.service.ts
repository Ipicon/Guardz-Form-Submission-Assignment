import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dto/create-entity.dto';
import { Entity } from './entities/entity.entity';

@Injectable()
export class EntitiesService {
  private readonly entities: Entity[] = [];
  private nextId = 1;

  create(createEntityDto: CreateEntityDto): Entity {
    const newEntity: Entity = {
      id: this.nextId++,
      ...createEntityDto,
    };

    this.entities.push(newEntity);

    return newEntity;
  }

  findAll(): Entity[] {
    return this.entities;
  }
}
