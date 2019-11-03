import { Dificuldade } from '../dificuldade/dificuldade';
import { Coordenada } from '../coordenada/coordenada';
import { Pontuacao } from '../pontuacao/pontuacao';

export class Usuario {
  public id: number;
  public nomeDeUsuario: string;
  public pontuacao: number;
  public dificuldade: Dificuldade;
  public coordenadas: Array<Coordenada>;

  constructor({
    id,
    nomeDeUsuario,
    dificuldade,
    coordenadas,
    pontuacao
  }: {
    id: number;
    nomeDeUsuario: string;
    dificuldade: Dificuldade;
    coordenadas?: Array<Coordenada>;
    pontuacao?: number;
  }) {
    this.id = id;
    this.nomeDeUsuario = nomeDeUsuario;
    this.dificuldade = dificuldade;
    this.coordenadas = coordenadas ? coordenadas : [];
    this.pontuacao = pontuacao
      ? pontuacao
      : new Pontuacao(this.coordenadas).calcularPontuacao(this.dificuldade);
  }

  public adicionarAmigo(usuario: Usuario) {}
  public seguirUsuario(usuario: Usuario) {}
  public bloquearUsuario(usuario: Usuario) {}
  public enviarCoordenada(novaCoordenada: Coordenada) {}
}
