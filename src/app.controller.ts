import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
appService: AppService;
constructor(){
  this.appService=new AppService();
}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test/:id/:name')
  getTest(
  @Param('id') id:string,
  @Param('name') name:string,
  // @Res() res:Response,
  // @Req() req
  ):string{

    return `DARLAB-${id}-${name}`;
  }
  @Get('check')
  getCheck(){
    return {status:'ok'}
  }
}

