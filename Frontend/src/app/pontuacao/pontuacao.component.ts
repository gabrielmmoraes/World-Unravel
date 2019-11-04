import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.component.html',
  styleUrls: ['./pontuacao.component.css']
})
export class PontuacaoComponent implements OnInit {
  @Input() pontuacao: number;

  constructor() {}

  ngOnInit() {}
}
