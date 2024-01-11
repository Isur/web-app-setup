import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';

function logger(req: Request, _: Response, next: NextFunction) {
  console.log(req.method, req.path, `from ${req.ip}`);
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = +configService.get('PORT');
  app.use(logger);
  await app.listen(port);
  console.log(`Application is running on port: ${port}`);
}
bootstrap();
