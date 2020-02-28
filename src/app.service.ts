import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const res = { status: 'Running', code: 200 };
    return res;
  }
}
