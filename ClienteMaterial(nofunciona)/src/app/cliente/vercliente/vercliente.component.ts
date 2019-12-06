import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Cliente } from 'src/app/model/cliente-model';
import { HttpClient } from 'selenium-webdriver/http';
import { ClienteService } from 'src/app/service/cliente.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AgregarclienteComponent } from 'src/app/cliente/agregarcliente/agregarcliente.component';
import { EditarclienteComponent } from '../editarcliente/editarcliente.component';

@Component({
  selector: 'app-vercliente',
  templateUrl: './vercliente.component.html',
  styleUrls: ['./vercliente.component.css']
})
export class VerclienteComponent implements OnInit {

  constructor(private servicioCliente: ClienteService, private dialog: MatDialog) {
    this.servicioCliente.listen().subscribe((m: any) => {
      console.log(m);
      //this.actualizarlista();

    })
  }

  lista: MatTableDataSource<Cliente>;
  columnas: string[] = ['Opciones', 'ID_cliente', 'nombre_cliente', 'direccion_cliente', 'cuit_cliente']

  ngOnInit() {
    this.actualizarlista()

  }

  actualizarlista() {
    this.servicioCliente.getClienteLista().subscribe(data => {
      this.lista = new MatTableDataSource(data);
    })
  }

  editarcliente(cli: Cliente) {
    this.servicioCliente.formulario = cli;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditarclienteComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe(res => { this.actualizarlista() });

  }
  borrarcliente(id: number) {
    if (confirm('Desea eliminar el cliente?')) {
      this.servicioCliente.deleteCliente(id).subscribe(res => {
        this.actualizarlista();
      });
    }
  }

  agregarcliente() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AgregarclienteComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe(res => { this.actualizarlista() });

  }
}


