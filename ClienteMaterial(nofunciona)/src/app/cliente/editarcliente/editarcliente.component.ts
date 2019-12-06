
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ClienteService } from 'src/app/service/cliente.service';
import {NgForm } from '@angular/forms';



@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrls: ['./editarcliente.component.css']
})
export class EditarclienteComponent implements OnInit {

 
  constructor(public dialogbox: MatDialogRef<EditarclienteComponent>, 
    private servicioCliente: ClienteService) { }

  ngOnInit() {
  }

  cerrar() { 
    this.dialogbox.close();
     
    this.servicioCliente.filter('Register click')
  }

  submitFormulario (formu: NgForm){
      this.servicioCliente.updateCliente(formu.value).subscribe();
  }

}
