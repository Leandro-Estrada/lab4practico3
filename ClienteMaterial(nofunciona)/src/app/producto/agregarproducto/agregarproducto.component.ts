import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProductoService } from 'src/app/service/producto.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.component.html',
  styleUrls: ['./agregarproducto.component.css']
})

export class AgregarproductoComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AgregarproductoComponent>,
    private servicioProducto: ProductoService) { }

    
  ngOnInit() {
    this.servicioProducto.vaciarFormulario();
    console.info(this.servicioProducto)
  
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
    this.servicioProducto.filter('Register click');
  }

  submitFormulario(formulario: NgForm) {
    
    this.servicioProducto.addProducto(formulario.value).subscribe();
      this.servicioProducto.vaciarFormulario();//formulario
      alert("Producto Registrado");
    
    
  }
}
