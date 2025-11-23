import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { createGlobalPipes } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 8080;

  /**
   *  NOTE: Using '*' for CORS because the assignment deploys by IP address
   *  and there is no real domain. In production, this should be restricted
   *  to the frontend domain only.
   */
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(createGlobalPipes());

  await app.listen(port);
  console.log(`Server running on port ${port}`);
}

void bootstrap();
