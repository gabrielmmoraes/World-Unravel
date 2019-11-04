import { Grupo } from 'src/models/grupo/grupo';
import { mockUsuarios } from 'src/mocks/usuario-mock';

export const mockGrupos: Array<Grupo> = [
  new Grupo({
    nome: 'Lalala',
    integrantes: [mockUsuarios[0], mockUsuarios[1]]
  }),
  new Grupo({
    nome: 'Perdedores',
    integrantes: [mockUsuarios[2], mockUsuarios[3]]
  }),
  new Grupo({
    nome: 'Vencedores',
    integrantes: [mockUsuarios[4], mockUsuarios[5]]
  })
];
