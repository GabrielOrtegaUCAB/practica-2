import {Camara} from "./Camara"
import {BuilderCamaraAntigua} from "./builderCamaraAntigua"
import {CamaraDirector} from "./CamaraDirector"
import {Fabricante} from "./Fabricante"

export class CamaraAntigua implements Camara{
    megapixeles: number;
    zoom: string;
    dimensiones: string;
    estructura: string[];

    constructor(zoom: string, megapixeles: number,dimensiones: string) {       
        this.megapixeles = megapixeles;
        this.zoom = zoom;
        this.dimensiones = dimensiones;
    }

    capturarImagen() {
        console.log("se tomo la foto")
        return {
            fecha: new Date(),
            nombre: "Foto.jpg"
        }
    }

    asignarHardware(){
        console.log("Asignando hardware")
    }

    asignarEstructura(nombreFabricante: string, camaraAntigua :CamaraAntigua){
        let fabricante= new Fabricante(camaraAntigua);
        fabricante.asignarNombreFabrica(nombreFabricante);       
        var estructuraVieja= new BuilderCamaraAntigua();
        let director = new CamaraDirector(estructuraVieja);      
        this.estructura = director.asignarEstructura(fabricante.conseguirNombre());
        return this.estructura;
    }

}
