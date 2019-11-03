import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  public latitude = 51.678418;
  public longitude = 7.809007;

  constructor() {}

  ngOnInit() {}
}
