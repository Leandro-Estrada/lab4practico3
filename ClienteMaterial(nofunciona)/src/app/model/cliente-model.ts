export class Cliente{
    id: number;
    nombre: string;
    direccion: string;
    cuit: string;

    constructor(id : number, nombre : string, direccion : string, cuit : string) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.cuit = cuit;
    }
}