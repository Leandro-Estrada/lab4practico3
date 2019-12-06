import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from 'selenium-webdriver/http';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductoService } from 'src/app/service/producto.service';
import { Producto } from 'src/app/model/producto-model';
import { AgregarproductoComponent } from '../agregarproducto/agregarproducto.component';
import { EditarproductoComponent } from '../editarproducto/editarproducto.component';

@Component({
  selector: 'app-verproducto',
  templateUrl: './verproducto.component.html',
  styleUrls: ['./verproducto.component.css']
})
export class VerproductoComponent implements OnInit {

  constructor(private servicioProducto: ProductoService, private dialog: MatDialog) {
    this.servicioProducto.listen().subscribe((m: any) => {
      console.log(m);
      })
  }

  lista: MatTableDataSource<Producto>;
  columnas: string[] = ['Opciones', 'ID_producto', 'codigo_producto', 'descripcion_producto', 'precio_unitario']

  ngOnInit() {
    this.actualizarlista()

  }

  actualizarlista() {
    this.servicioProducto.getProductoLista().subscribe(data => {
      this.lista = new MatTableDataSource(data);
    })
  }

  editarproducto(pro: Producto) {
    this.servicioProducto.formulario = pro;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditarproductoComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe(res => { this.actualizarlista() });

  }
  borrarproducto(id: number) {
    if (confirm('Seguro desea eliminar el producto?')) {
      this.servicioProducto.deleteProducto(id).subscribe(res => {
        this.actualizarlista();
      });
    }
  }

  agregarproducto() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AgregarproductoComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe(res => { this.actualizarlista() });

  }
}


