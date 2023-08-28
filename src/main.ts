import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { initConfigSwagger } from './shared/config/swagger.config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  initConfigSwagger(app);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
