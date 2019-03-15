import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductosServiceService {
  private productos: Array<Producto> = [
    {
      imagen: 'assets/man.jpg',
      nombre: 'Alexis',
      precio: 50
    },
    {
      imagen: 'assets/dogo2.jpg',
      nombre: 'Amalia',
      precio: 150
    },
    {
      imagen: 'assets/dogo2.jpg',
      nombre: 'London',
      precio: 150
    },
    {
      imagen: 'assets/dogo.jpg',
      nombre: 'Java',
      precio: 150
    },
    {
      imagen: 'assets/dogo.jpg',
      nombre: 'GatitoBeBe',
      precio: 150
    }
  ];

  constructor() { }
  public listaProductos(): Array<Producto> {
    return this.productos;
  }

  public obtenerNombreProductoPorIndice(indice: number): string {
    return this.productos[indice].nombre;
  }
  public listaProductosDesdeApi(): Observable<Producto> {
    return new Observable((suscriptor) => {
      let index = 0;
      setInterval(() => {
        suscriptor.next(this.productos[index]);
        index++;
      }, 1000);
    });
  }
}
