import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/product-nest-tutorial', { useNewUrlParser: true, useUnifiedTopology: true }),
    MorganModule.forRoot(), ProductModule
  ],
  controllers: [AppController],
  providers: [{ provide: APP_INTERCEPTOR, useClass: MorganInterceptor('dev') }, AppService],
})
export class AppModule { }
