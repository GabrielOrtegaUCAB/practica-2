import {CamaraAntigua} from "./CamaraAntigua";
import {BuilderCamaraActual} from "./BuilderCamaraActual"
import {CamaraDirector} from "./CamaraDirector"
import {Fabricante} from "./Fabricante"

export class CamaraModerna extends CamaraAntigua{
    saturacion: string;
    brillo: string ;
    contraste: string;

    constructor(
        zoom: string,
        megapixeles: number,
        dimensiones: string,
        saturacion = "50%",
        brillo="12%",
        constraste="30%"
    ) {
        super(zoom,megapixeles ,dimensiones );
        this.saturacion = saturacion;
        this.brillo = brillo;
        this.contraste = constraste;
    }

    public configurarSaturacion(nuevaSaturacion = "50%") {
        console.log("Se configura saturacion de camara a : "+nuevaSaturacion);
        this.saturacion = nuevaSaturacion;
    }

    public configurarBrillo(nuevoBrillo = "12%") {
        console.log("Se configura brillo de camara a : "+nuevoBrillo);
        this.brillo = nuevoBrillo;
    }

    public configurarContraste(nuevoContraste = "30%") {
        console.log("Se configura contraste de camara a : "+nuevoContraste);
        this.contraste = nuevoContraste;
    }

    public asignarEstructura(nombreFabricante: string , camaraModerna: CamaraModerna){
        let fabricante= new Fabricante(camaraModerna);
        fabricante.asignarNombreFabrica(nombreFabricante); 
        var estructuraModerna= new BuilderCamaraActual();
        let director = new CamaraDirector(estructuraModerna);      
        this.estructura = director.asignarEstructura(fabricante.conseguirNombre());
        return this.estructura;
    }

}
