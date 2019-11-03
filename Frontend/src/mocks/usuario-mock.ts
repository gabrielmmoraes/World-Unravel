import { Usuario } from 'src/models/usuario/usuario';
import { Dificuldade } from 'src/models/dificuldade/dificuldade';

export const mockUsuarios: Array<Usuario> = [
  new Usuario({
    id: 1,
    nomeDeUsuario: 'Gabriel',
    pontuacao: 15000,
    dificuldade: Dificuldade.MEDIO
  }),
  new Usuario({
    id: 2,
    nomeDeUsuario: 'Matheus',
    pontuacao: 13500,
    dificuldade: Dificuldade.MEDIO
  }),
  new Usuario({
    id: 3,
    nomeDeUsuario: 'Alice',
    pontuacao: 15050,
    dificuldade: Dificuldade.MEDIO
  }),
  new Usuario({
    id: 4,
    nomeDeUsuario: 'Mario',
    pontuacao: 7500,
    dificuldade: Dificuldade.MEDIO
  }),
  new Usuario({
    id: 5,
    nomeDeUsuario: 'Artur',
    pontuacao: 9700,
    dificuldade: Dificuldade.MEDIO
  }),
  new Usuario({
    id: 6,
    nomeDeUsuario: 'Lucas',
    pontuacao: 8000,
    dificuldade: Dificuldade.MEDIO
  })
];
