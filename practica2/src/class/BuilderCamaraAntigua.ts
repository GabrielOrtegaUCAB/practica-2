import {Camara} from "./Camara";
import {CamaraBuilder} from "./CamaraBuilder"
import {CamaraAntigua} from "./CamaraAntigua"

export class BuilderCamaraAntigua extends CamaraBuilder{ 
    constructor(){super(new CamaraAntigua("x",3,"y"))}      

    colocarLente(){
    	this.estructura.push("lente de 1980, baja resolucion");
    }
    colocarDisparador(){
    	this.estructura.push("disparador cobre, bajo rendimiento");
    }
    colocarAnilloDeZoom(){
    	this.estructura.push("anillo de zoom con bajo rango");
    }
    colocarFlash(){
    	this.estructura.push("flash de poca brillo");
    }
    colocarVisor(){
    	this.estructura.push("sin visor panoramico");
    }
}
