import {Camara} from "./Camara";
export class Fabricante{ 
    camara :Camara;
    nombre: string;

    constructor(camara: Camara) {
        this.camara = camara;
    }

   asignarNombreFabrica(nombre: string){
   	this.nombre = nombre;
   }

   conseguirNombre(){
   	return this.nombre;
   }
}
