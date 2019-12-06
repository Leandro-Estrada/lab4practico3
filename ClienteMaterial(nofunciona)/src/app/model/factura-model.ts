export class Factura{
   id: number;
   tipo:string;
   fecha:Date;
   numero:number;
   puntoventa:number;
   clienteid: number
   total:number;

   constructor(id: number, tipo:string, fecha:Date, numero:number, puntoventa:number, clienteid: number, total:number){
    this.id=id;
    this.tipo=tipo;
    this.fecha=fecha;
    this.numero=numero;
    this.puntoventa=puntoventa;
    this.clienteid=clienteid;
    this.total=total;
   }

}