import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { AlarmaComponent } from './alarma/alarma.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienes', component: QuienesComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ponAlarma', component: AlarmaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
