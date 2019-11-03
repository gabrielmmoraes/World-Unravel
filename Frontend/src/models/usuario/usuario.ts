import { Dificuldade } from '../dificuldade/dificuldade';
import { Coordenada } from '../coordenada/coordenada';

export class Usuario {
  public id: number;
  public nomeDeUsuario: string;
  public pontuacao: number;
  public dificuldade: Dificuldade;

  public adicionarAmigo(usuario: Usuario): boolean {}
  public seguirUsuario(usuario: Usuario): boolean {}
  public bloquearUsuario(usuario: Usuario): boolean {}
  public enviarCoordenada(novaCoordenada: Coordenada): boolean {}
}
