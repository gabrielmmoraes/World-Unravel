import { Component, OnInit } from '@angular/core';
import { Mapa } from '../../models/mapa/mapa';
import { mockUsuarios } from 'src/mocks/usuario-mock';
import { Usuario } from 'src/models/usuario/usuario';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  private googleMaps: Mapa;
  private usuario: Usuario;

  constructor() {}

  ngOnInit() {
    this.usuario = mockUsuarios[0];
    this.googleMaps = new Mapa(this.usuario.coordenadas);
    this.googleMaps.renderizarNuvem();
  }

  public mostrarCoordenada(event: Event) {
    console.log(event);
  }
}
