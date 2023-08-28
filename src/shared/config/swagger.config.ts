import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function initConfigSwagger(app: INestApplication) {
    const config = new DocumentBuilder()
    .setTitle(process.env.APP_NAME)
    .setDescription('Área de backoffice para controlar os serviços de assistências da Estbank')
    .setVersion('1.0')
    .addServer(`http://localhost:${process.env.APP_PORT}`, 'local')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}