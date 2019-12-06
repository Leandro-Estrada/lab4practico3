export class Item {
    id: number;
    facturaid: number;
    cantidad: number;
    codigo: string;
    descripcion: string;
    preciounitario: number;
    iva: number;
    subtotal: number;
    productoid: number;

    constructor(id: number, facturaid: number, cantidad: number, codigo: string, descripcion: string, preciounitario: number, iva: number, subtotal: number, productoid: number) {
        this.id = id;
        this.facturaid = facturaid;
        this.cantidad = cantidad;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.preciounitario = preciounitario;
        this.iva = iva;
        this.subtotal = subtotal;
        this.productoid = productoid;
    }
}

// id
// factura: Factura (id)
// cantidad: int
// codigo: string[50]
// descripcion: string[300]
// pu: double
// iva: double (%)
// subtotal: double (calc = cantidad*pu+iva)
// producto: Producto (id)