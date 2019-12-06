import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from 'src/app/model/cliente-model';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs';
import { Options } from 'selenium-webdriver/chrome';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
    this.formulario = new Cliente(null, '', '', '')
  }

  formulario: Cliente;

  readonly APIUrl = "http://localhost:3000";

  vaciarFormulario() {
    this.formulario = {
      id: 0,
      nombre: '',
      direccion: '',
      cuit: ''
    }
  }

  getClienteLista(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.APIUrl + '/clientes');
  }

  addCliente(cli: Cliente) {
    return this.http.post(this.APIUrl + '/clientes', cli)
  }

  deleteCliente(id: number) {
    return this.http.delete(this.APIUrl + '/clientes/' + id);
  }

  updateCliente(cli: Cliente) {
    return this.http.put(this.APIUrl + '/clientes' + '/' + cli.id, cli);

  }

  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }
}
