import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS
  app.enableCors();

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('Gestión Integral Escolar')
    .setDescription('API para administración de alumnos, materias, calificaciones y asistencias')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
    console.log('Documentación en http://localhost:3000/api/docs');
  });
}
bootstrap();
