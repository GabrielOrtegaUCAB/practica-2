import {CamaraAntigua} from "./CamaraAntigua";

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

}
