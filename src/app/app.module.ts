import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { EncomillarPipe } from './encomillar.pipe';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadComponent,
    CiudadesComponent,
    EncomillarPipe,
    ContactoComponent,
    QuienesComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
