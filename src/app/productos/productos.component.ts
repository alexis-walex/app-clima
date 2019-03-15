import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ApiProductosServiceService } from '../api-productos-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public productos: Array<Producto>;

  constructor( private productoService: ApiProductosServiceService) {
    // this.productos = this.productoService.listaProductos();
    this.productos = [];
    this.productoService.listaProductosDesdeApi().subscribe({
      next: (producto: Producto) => {
        this.productos.push(producto);
      }
    });
  }

  ngOnInit() {
  }

}
