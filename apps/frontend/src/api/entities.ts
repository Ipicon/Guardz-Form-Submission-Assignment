import { z } from 'zod';
import { api } from './client';
import { entitySchema } from '@/schemas/entity';

export const getEntities = () =>
  api('/entities', {
    schema: z.array(entitySchema),
  });
