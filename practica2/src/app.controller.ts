import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Fotografo} from "./class/Fotografo";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/foto')
  tomarFoto() {
    const fotografo = new Fotografo("Gabriel",10);
    return fotografo.TomarFotoConCamara();
  }

}
