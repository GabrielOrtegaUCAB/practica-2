import { CamaraAntigua } from "./CamaraAntigua";
import {Camara} from "./Camara";

export  abstract class CamaraBuilder { 
    camara: Camara;
    estructura: string[] = [];

    constructor(camara: Camara){
        this.camara= camara;
    }

    abstract colocarLente();
    abstract colocarDisparador();
    abstract colocarAnilloDeZoom();
    abstract colocarFlash();
    abstract colocarVisor();

    public build():string[] {
        return this.estructura;
    }

}
