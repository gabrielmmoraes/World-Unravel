import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario/usuario';
import { mockUsuarios } from 'src/mocks/usuario-mock';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  private usuarios: Array<Usuario>;
  private usuarioBusca = '';

  constructor() {
    this.usuarios = mockUsuarios.sort((usuario1, usuario2) => {
      if(usuario1.nome < usuario2.nome) { return -1; }
      if(usuario1.nome > usuario2.nome) { return 1; }
      return 0;
    });
  }

  ngOnInit() {
  }

}
