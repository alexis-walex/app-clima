import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  public producto: Producto;
  public productos: Array<Producto> = [
    {
      imagen: 'assets/dogo.jpg',
      nombre: 'Alexis',
      precio: 50
    },
    {
      imagen: 'assets/dogo.jpg',
      nombre: 'Alexis 2',
      precio: 150
    },
    {
      imagen: 'assets/dogo.jpg',
      nombre: 'Alexis 3',
      precio: 150
    },
    {
      imagen: 'assets/dogo.jpg',
      nombre: 'Alexis 3',
      precio: 150
    }
  ];
  constructor() {
    this.producto = this.productos[0];
  }

  ngOnInit() {
  }

}
