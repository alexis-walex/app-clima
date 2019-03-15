import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienes', component: QuienesComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'productos', component: ProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
