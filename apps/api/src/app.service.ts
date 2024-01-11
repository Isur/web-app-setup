import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const r = Math.ceil(Math.random() * 10);
    return `Hello World :)! ${r}`;
  }
}
