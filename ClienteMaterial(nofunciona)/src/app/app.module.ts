import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './cliente/cliente.component';
import { VerclienteComponent } from './cliente/vercliente/vercliente.component';
import { EditarclienteComponent } from './cliente/editarcliente/editarcliente.component';
import { AgregarclienteComponent } from './cliente/agregarcliente/agregarcliente.component';
import { MatDialogModule, MatTableModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { ClienteService } from 'src/app/service/cliente.service';
import { ProductoService } from 'src/app/service/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { AgregarproductoComponent } from './producto/agregarproducto/agregarproducto.component';
import { EditarproductoComponent } from './producto/editarproducto/editarproducto.component';
import { VerproductoComponent } from './producto/verproducto/verproducto.component';
import { FacturacionComponent } from './factura/facturacion/facturacion.component';
import {FacturacionService} from 'src/app/service/facturacion.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    VerclienteComponent,
    EditarclienteComponent,
    AgregarclienteComponent,
    ProductoComponent,
    AgregarproductoComponent,
    EditarproductoComponent,
    VerproductoComponent,
    FacturacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ProductoService,ClienteService, FacturacionService],
  bootstrap: [AppComponent],
  entryComponents:[AgregarclienteComponent, EditarclienteComponent,AgregarproductoComponent,EditarproductoComponent]
})
export class AppModule { }
