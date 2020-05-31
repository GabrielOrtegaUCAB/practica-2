import {Camara} from "./Camara";

export class CamaraAntigua implements Camara{
    megapixeles: number;
    zoom: string;
    dimensiones: string;

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

}
