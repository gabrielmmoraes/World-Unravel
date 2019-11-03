import { Usuario } from '../usuario/usuario';

export class Grupo {
  public nome: string;
  public integrantes: Array<Usuario>;

  constructor({
    nome,
    integrantes
  }: {
    nome: string;
    integrantes: Array<Usuario>;
  }) {
    this.nome = nome;
    this.integrantes = integrantes;
  }

  public adicionarMembro(novoMembro: Usuario) {}
}
