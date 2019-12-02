import { Coordenada } from '../coordenada/coordenada';

export class Mapa {
  public coordenadaFocoMapa: Coordenada;
  public coordenadasUsuario: Array<Coordenada>;

  constructor(arrayCoordenadas: Array<Coordenada>) {
    this.coordenadasUsuario = arrayCoordenadas;
    this.coordenadaFocoMapa = arrayCoordenadas[arrayCoordenadas.length - 1];
  }

  public renderizarNuvem() {
    console.log('Renderizando fog...');
  }
}
