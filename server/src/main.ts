import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
  CorsConfig,
  NestConfig,
  SwaggerConfig,
} from './configs/config.interface';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }))


  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');

  // Swagger Api
  if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title || 'Nestjs')
      .setDescription(swaggerConfig.description || 'The nestjs API description')
      .setVersion(swaggerConfig.version || '1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path || 'api', app, document);
  }


  if (corsConfig.enabled) {
    app.enableCors();
  }
  
  await app.listen(process.env.PORT || nestConfig.port || 5000);

}
bootstrap();
