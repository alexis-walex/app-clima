import { Component } from '@angular/core';
import { Ciudad } from './ciudad';
import { ApiTempService } from './api-temp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-clima';
  public ciudades: Array<Ciudad> = [];

  animales: string[] = ['London', 'Java', 'Gatitos'];

  constructor(private apiTempService: ApiTempService) {}

  public agregarCiudad(ciudadNombre: string): void {
    this.ciudades.push({
      nombre: ciudadNombre,
      temperatura: {
        valor: this.apiTempService.obtenerTemp(),
        tipo: 'ºC'
      }
    });
  }
}
