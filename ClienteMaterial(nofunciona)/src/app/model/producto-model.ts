export class Producto {
    id: number;
    codigo: string;
    descripcion: string;
    preciounitario: number;

    constructor(id: number, codigo: string, descripcion: string, preciounitario: number) {
        this.id = id;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.preciounitario = preciounitario;
    }

}

