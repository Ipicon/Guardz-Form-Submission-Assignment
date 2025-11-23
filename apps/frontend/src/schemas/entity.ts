import { z } from 'zod';

export const entitySchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.email(),
  age: z.coerce.number().min(18),
  about: z.string().optional(),
});

export const addEntitySchema = entitySchema.omit({ id: true });

export type Entity = z.infer<typeof entitySchema>;
export type AddEntity = z.infer<typeof addEntitySchema>;
