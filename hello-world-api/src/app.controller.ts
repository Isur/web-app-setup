import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello2(@Param('id') id: string): string {
    const res = this.appService.getHello();
    console.log(`id: ${id} - ${res}`);
    const r = `id: ${id} - ${res}`;
    return r;
  }

  @Get()
  getHello(): string {
    const res = this.appService.getHello();
    console.log(res);
    return res;
  }
}
