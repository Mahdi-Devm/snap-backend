import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AdminModule } from 'src/rest/admin/admin.module';
import { DriverModule } from 'src/rest/driver/driver.module';
import { PassengerModule } from 'src/rest/passenger/passenger.module';

interface SwaggerModuleItem {
  path: string;
  module?: any;
}

export function setupSwagger(
  app: INestApplication,
  configService: ConfigService,
) {
  const apiVersion = configService.get('App.version');
  const swaggerTitle = configService.get('Swagger.title') as string;
  const swaggerDescription = configService.get('Swagger.description') as string;
  const swaggerVersion = configService.get('Swagger.version');

  const swaggerOptions = new DocumentBuilder()
    .setTitle(swaggerTitle)
    .setDescription(swaggerDescription)
    .setVersion(swaggerVersion)
    .build();

  const mainDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(`${apiVersion}/docs`, app, mainDocument);

  const modules: SwaggerModuleItem[] = [
    { path: 'admin', module: AdminModule },
    { path: 'driver', module: DriverModule },
    { path: 'passenger', module: PassengerModule },
  ];
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'snap backend',
    customCss: '.swagger-ui .topbar { background-color: #2c3e50; }',
    swaggerOptions: {
      persistAuthorization: true,
      filter: true,
    },
  };
  modules.forEach(({ path, module }) => {
    const doc = SwaggerModule.createDocument(app, swaggerOptions, {
      include: [module],
    });
    SwaggerModule.setup(`${apiVersion}/docs/${path}`, app, doc, customOptions);
    console.log(`${apiVersion}/docs/${path}`);
  });
}
