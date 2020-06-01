import {Camara} from "./Camara";
import {CamaraBuilder} from "./CamaraBuilder"

export class CamaraDirector{ 
    camaraBuilder:CamaraBuilder;

    constructor(camaraBuilder:CamaraBuilder){
      	this.camaraBuilder = camaraBuilder;
    }

    asignarEstructura(nombreFabrica ): string[]{
    	let fabricante = nombreFabrica.fabrica;
    	console.log(fabricante.length);

    	if(fabricante.length<10){
			this.camaraBuilder.colocarLente();
			this.camaraBuilder.colocarDisparador();
			this.camaraBuilder.colocarAnilloDeZoom();
		}else{
			this.camaraBuilder.colocarFlash();
			this.camaraBuilder.colocarVisor(); 
		}
			return this.camaraBuilder.build();  
    }
}
