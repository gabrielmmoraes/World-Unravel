import { Usuario } from '../usuario/usuario';

export class Grupo {
  public nome: string;
  public integrantes: Array<Usuario>;
  public pontuacao: number;

  constructor({
    nome,
    integrantes
  }: {
    nome: string;
    integrantes: Array<Usuario>;
  }) {
    this.nome = nome;
    this.integrantes = integrantes;
    this.pontuacao = this.integrantes.reduce((acumulador, integrante) => {
      return acumulador + integrante.pontuacao;
    }, 0);
  }

  public adicionarMembro(novoMembro: Usuario) {}
}
