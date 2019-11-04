import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/models/grupo/grupo';
import { mockGrupos } from 'src/mocks/grupo-mock';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  private grupos: Array<Grupo>;

  constructor() {
    this.grupos = mockGrupos.sort((grupo1, grupo2) => {
      return grupo2.pontuacao - grupo1.pontuacao;
    });
  }

  ngOnInit() {}
}
