import { Component } from '@angular/core';
import { Ciudad } from './ciudad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-clima';
  public ciudades: Array<Ciudad> = [];

  public agregarCiudad(ciudadNombre: string): void {
    this.ciudades.push({
      nombre: ciudadNombre,
      temperatura: {
        valor: 20,
        tipo: 'ºC'
      }
    });
    console.log(this.ciudades);
  }
}
