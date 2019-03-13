import { Component, OnInit, Input } from '@angular/core';
import { Ciudad } from '../ciudad';
import { Temperatura } from '../temperatura';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent implements OnInit {
  @Input() miCiudad: Ciudad;
  constructor() { }

  ngOnInit() {
  }

}
