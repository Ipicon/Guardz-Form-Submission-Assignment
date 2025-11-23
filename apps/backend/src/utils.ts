import { ValidationPipe } from '@nestjs/common';

export const createGlobalPipes = () =>
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  });
