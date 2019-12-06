import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Cliente } from 'src/app/model/cliente-model';
import { HttpClient } from 'selenium-webdriver/http';
import { FacturacionService } from 'src/app/service/facturacion.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Item } from 'src/app/model/item-model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  constructor(private servicioFacturacion: FacturacionService, private dialog: MatDialog) {
    this.ClientesdropdownRefresh();
    this.servicioFacturacion.listen().subscribe((m: any) => {
      console.log(m);
      
      console.log(this.listaItems);
     
    })
  }
  public listaItems: Array<string> = [];
  lista: MatTableDataSource<Item>;
  columnas: string[] = ['Eliminar', 'Producto', 'Cantidad', 'IVA', 'Subtotal']

  ngOnInit() {
  }

  
  ClientesdropdownRefresh(){
    this.servicioFacturacion.getDepDropDownValuesClientes().subscribe(data=>{
      data.forEach(element => {
        
        this.listaItems.push(element["nombre"]);
      });
    })
            }

}





