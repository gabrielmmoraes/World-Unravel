import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario/usuario';
import { mockUsuarios } from 'src/mocks/usuario-mock';

@Component({
  selector: 'app-placar-lideres',
  templateUrl: './placar-lideres.component.html',
  styleUrls: ['./placar-lideres.component.css']
})
export class PlacarLideresComponent implements OnInit {
  private usuarios: Array<Usuario>;

  constructor() {
    this.usuarios = mockUsuarios.sort((usuario1, usuario2) => {
      return usuario2.pontuacao - usuario1.pontuacao;
    });
  }

  ngOnInit() {}
}
