import { Usuario } from 'src/models/usuario/usuario';
import { Dificuldade } from 'src/models/dificuldade/dificuldade';

export const mockUsuarios: Array<Usuario> = [
  new Usuario({
    id: 1,
    nome: 'Gabriela',
    dificuldade: Dificuldade.MEDIO,
    coordenadas: [
      { latitude: -22.862717216466017, longitude: -43.22590030788871 },
      { latitude: -22.86168907255886, longitude: -43.22841085552665 }
    ]
  }),
  new Usuario({
    id: 2,
    nome: 'Matheus',
    dificuldade: Dificuldade.MEDIO,
    coordenadas: [
      { latitude: -22.860898187336925, longitude: -43.22313226818534 },
      { latitude: -22.861886793145143, longitude: -43.22154440044852 }
    ]
  }),
  new Usuario({
    id: 3,
    nome: 'Alice',
    dificuldade: Dificuldade.MEDIO,
    coordenadas: [
      { latitude: -22.85666083629548, longitude: -43.23218822479248 },
      { latitude: -22.858088934424536, longitude: -43.23132909893485 }
    ]
  }),
  new Usuario({
    id: 4,
    nome: 'Mario',
    dificuldade: Dificuldade.MEDIO,
    coordenadas: [
      { latitude: -22.850541605215252, longitude: -43.23407482206835 },
      { latitude: -22.85200485074053, longitude: -43.23315214216723 }
    ]
  }),
  new Usuario({
    id: 5,
    nome: 'Artur',
    dificuldade: Dificuldade.MEDIO,
    coordenadas: [
      { latitude: -22.851826889288102, longitude: -43.23514770567431 },
      { latitude: -22.854327625335397, longitude: -43.23369026184082 }
    ]
  }),
  new Usuario({
    id: 6,
    nome: 'Lucas',
    dificuldade: Dificuldade.MEDIO,
    coordenadas: [
      { latitude: -22.846465737500093, longitude: -43.23777465116359 },
      { latitude: -22.844666265451313, longitude: -43.23607949506618 }
    ]
  })
];
