
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProductoService } from 'src/app/service/producto.service';
import {NgForm } from '@angular/forms';



@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {

 
  constructor(public dialogbox: MatDialogRef<EditarproductoComponent>, 
    private servicioProducto: ProductoService) { }

  ngOnInit() {
  }

  cerrar() { 
    this.dialogbox.close();
         this.servicioProducto.filter('Register click')
  }

  submitFormulario (formu: NgForm){
      this.servicioProducto.updateProducto(formu.value).subscribe();
  }

}
