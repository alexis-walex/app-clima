import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { EncomillarPipe } from './encomillar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CiudadComponent,
    CiudadesComponent,
    EncomillarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
