import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
  CorsConfig,
  NestConfig
} from './configs/config.interface';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))


  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');

  if (corsConfig.enabled) {
    app.enableCors();
  }
  
  await app.listen(process.env.PORT || nestConfig.port || 5000);

}
bootstrap();
