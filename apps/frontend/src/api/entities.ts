import { z } from 'zod';
import { api } from './client';
import { entitySchema, type AddEntity } from '@/schemas/entity';

export const getEntities = () =>
  api('/entities', {
    schema: z.array(entitySchema),
  });

export const addEntity = (body: AddEntity) =>
  api('/entities', {
    body,
    method: 'POST',
  });
