import { Controller, Get ,Param } from '@nestjs/common';
import { AppService } from './app.service';
import {Fotografo} from "./class/Fotografo";
import {CamaraAntigua} from "./class/CamaraAntigua"
import {CamaraModerna} from "./class/CamaraModerna"


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

  @Get('BuilderCamaraVieja/:fabrica')
  builderCamaraVieja(
    @Param() fabrica: string,
  ){
    const camaraAntigua = new CamaraAntigua("ejemplo", 10,"ejempo3");
    return camaraAntigua.asignarEstructura(fabrica, camaraAntigua);
  }

  @Get('BuilderCamaraNueva/:fabrica')
  builderCamaraNuevo(
     @Param() fabrica: string,
   ){
    const camaraNueva = new CamaraModerna("alto rango",30,"tridimensionales");
    return camaraNueva.asignarEstructura(fabrica, camaraNueva);
  }

}
