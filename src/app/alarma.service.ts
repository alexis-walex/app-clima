import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlarmaService {
  constructor() { }

  public ponAlarma(tiempo: number ): Observable<string> {
    return new Observable((subs) => {
      if (tiempo > 10000) {
        subs.error('Mucho tiempo');
      }
      setTimeout(() => {
        subs.complete();
      }, tiempo);
    });
  }
}
