import {Camara} from "./Camara";
import {CamaraBuilder} from "./CamaraBuilder"
import {CamaraAntigua} from "./CamaraAntigua"

export class BuilderCamaraActual extends CamaraBuilder{     
	constructor(){ super(new CamaraAntigua("x",3,"y"))}  	

    colocarLente(){
    	this.estructura.push("lente de alta vision, ultima generacion");
    }
    colocarDisparador(){
    	this.estructura.push("disparador de alta velocidad");
    }
    colocarAnilloDeZoom(){
    	this.estructura.push("anillo de zoom con rango de 100 a 1000");
    }
    colocarFlash(){
    	this.estructura.push("flash de alta luminicencia");
    }
    colocarVisor(){
    	this.estructura.push("visor panoramico");
    }
}
