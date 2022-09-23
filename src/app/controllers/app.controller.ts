import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {

  @Get()
  getVersion(): string {
    return `Remote Printer File Writer API `;
  }
}
