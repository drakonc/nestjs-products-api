import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  //Render('index')
  getHello(@Res() res) {
    const message = this.appService.getHello();
    res.render('index', { message })
  }
}
