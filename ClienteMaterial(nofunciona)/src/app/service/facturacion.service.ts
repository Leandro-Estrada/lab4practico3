import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from 'src/app/model/cliente-model';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs';
import { Options } from 'selenium-webdriver/chrome';
import { Factura } from '../model/factura-model';
import { Producto } from '../model/producto-model';
@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  constructor(private http: HttpClient) {
    this.formulario = new Factura(0,'',null,0,0,0,0)
  }

  formulario: Factura;
  public formularioCliente: Cliente;
  

  readonly APIUrl = "http://localhost:3000";

  vaciarFormulario() {
    this.formulario = {
      id: 0,
     tipo:'',
     fecha:null,
     numero:0,
     puntoventa:0,
     clienteid: 0,
     total:0

    }
  }

  getDepDropDownValuesClientes():Observable<any>{
    return this.http.get<Cliente[]>(this.APIUrl+'/clientes');
  }

  getFacturaLista(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.APIUrl + '/facturas');
  }

  getProductoLista(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.APIUrl + '/productos');
  }

  getClienteLista(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.APIUrl + '/clientes');
  }


  addFactura(fac: Factura) {
    return this.http.post(this.APIUrl + '/facturas', fac)
  }

  deleteFactura(id: number) {
    return this.http.delete(this.APIUrl + '/facturas/' + id);
  }

  updateFactura(fac:Factura) {
    return this.http.put(this.APIUrl + '/facturas' + '/' + fac.id, fac);

  }

  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }
}
