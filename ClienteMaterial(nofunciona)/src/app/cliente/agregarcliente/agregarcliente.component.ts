import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ClienteService } from 'src/app/service/cliente.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-agregarcliente',
  templateUrl: './agregarcliente.component.html',
  styleUrls: ['./agregarcliente.component.css']
})

export class AgregarclienteComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AgregarclienteComponent>,
    private servicioCliente: ClienteService) { }

    
  ngOnInit() {
    this.servicioCliente.vaciarFormulario();
    console.info(this.servicioCliente)
  
  }

  // vaciarFormulario(formulario?: NgForm) {
  //   if (formulario != null) {
  //     formulario.resetForm();
  //     this.servicioCliente.formulario = {
  //       id: 0,
  //       nombre: '',
  //       direccion: '',
  //       cuit: ''
  //     }
  //   }
  // }

  cerrar() {
    this.dialogbox.close();
    this.servicioCliente.filter('Register click');
  }

  submitFormulario(formulario: NgForm) {
    
    this.servicioCliente.addCliente(formulario.value).subscribe();
      this.servicioCliente.vaciarFormulario();//formulario
      alert("Cliente Registrado");
    
    
  }
}
