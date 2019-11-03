import { Component, OnInit } from '@angular/core';
import { Mapa } from '../../models/mapa/mapa';
import { Pontuacao } from 'src/models/pontuacao/pontuacao';
import { Dificuldade } from 'src/models/dificuldade/dificuldade';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  private googleMaps: Mapa;

  constructor() {}

  ngOnInit() {
    const arrayCoordenadas = [{ latitude: 51.678418, longitude: 7.809007 }];
    this.googleMaps = new Mapa(arrayCoordenadas);
    this.googleMaps.renderizarNuvem(arrayCoordenadas);
    const a = new Pontuacao([
      { latitude: 52.2296756, longitude: 21.0122287 },
      { latitude: 52.406374, longitude: 16.9251681 },
      { latitude: 52.2296756, longitude: 21.0122287 }
    ]);
    console.log(a.calcularPontuacao(Dificuldade.FACIL));
  }
}
