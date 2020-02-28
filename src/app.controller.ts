import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Res() res) {
    const message = this.appService.getHello();
    res.status(HttpStatus.OK).json(message)
  }
}
