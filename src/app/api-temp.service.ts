
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTempService {

  constructor() {}
  public obtenerTemp(): number {
    return Math.floor(Math.random() * 10) + 15;
  }
}
