import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ZodObject, ZodType } from 'zod';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getSchemaKeys = <T extends Record<string, ZodType>>(
  schema: ZodObject<T>,
) => Object.keys(schema.shape) as (keyof T)[];
