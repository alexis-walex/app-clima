import { Component, OnInit } from '@angular/core';
import { AlarmaService } from '../alarma.service';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.component.html',
  styleUrls: ['./alarma.component.scss']
})
export class AlarmaComponent implements OnInit {
  constructor( private miAlarma: AlarmaService) {
    this.miAlarma.ponAlarma(1000).subscribe();
   }

  ngOnInit() {}

}
