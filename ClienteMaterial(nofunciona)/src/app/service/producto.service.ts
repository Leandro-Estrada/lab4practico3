import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from 'src/app/model/producto-model';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs';
import { Options } from 'selenium-webdriver/chrome';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {
   this.vaciarElFormulario(this.formulario);
  }

  formulario: Producto;

  readonly APIUrl = "http://localhost:3000";

  vaciarFormulario() {
    this.formulario = {
      id: 0,
      codigo: '',
      descripcion: '',
      preciounitario: 0
    }
  }

  vaciarElFormulario(formulario:Producto) {
    formulario = {
      id: 0,
      codigo: '',
      descripcion: '',
      preciounitario: 0
    }
  }
  getProductoLista(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.APIUrl + '/productos');
  }

  addProducto(pro: Producto) {
    return this.http.post(this.APIUrl + '/productos', pro)
  }

  deleteProducto(id: number) {
    return this.http.delete(this.APIUrl + '/productos/' + id);
  }

  updateProducto(pro: Producto) {
    return this.http.put(this.APIUrl + '/productos' + '/' + pro.id, pro);

  }

  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }
}
