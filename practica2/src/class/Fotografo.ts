import {CamaraModerna} from "./CamaraModerna";

export class Fotografo {
    nombre: string;
    experiencia: number;
    camara: CamaraModerna;

    constructor(nombre: string, experiencia:number) {
        this.nombre = nombre;
        this.experiencia = experiencia;
        this.camara = new CamaraModerna("12x",56,"20x20","15%");
    }

    public TomarFotoConCamara(){
        console.log("Comienza foto con camara")
        this.camara.configurarBrillo("16%");
        this.camara.configurarContraste("50%");
        this.camara.configurarSaturacion("20%");
        return {
            ...this.camara.capturarImagen(),
            nombreFotografo: this.nombre,
            experiencia: this.experiencia,
            camara: this.camara
        };
    }

}
