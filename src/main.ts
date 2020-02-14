import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express_handlebars from 'express-handlebars';
import { AppModule } from './app.module';

const ex_hbs = express_handlebars.create({
  partialsDir: join(__dirname, '..', '/views/partials'),
  layoutsDir: join(__dirname, '..', '/views/layouts'),
  defaultLayout: 'main',
  extname: '.hbs',
});


async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.engine('hbs', ex_hbs.engine);
  app.set('view engine', 'hbs');
  app.enableCors();
  await app.listen(port, () => {
    console.log(`Servidor Corriendo en Puerto ${port}`);
  });
}
bootstrap();
