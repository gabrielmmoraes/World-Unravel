import { Coordenada } from '../coordenada/coordenada';

export class Mapa {
  public coordenadaFoco: Coordenada;

  constructor(arrayCoordenadas: Coordenada) {
    this.coordenadaFoco = arrayCoordenadas[arrayCoordenadas.length - 1];
  }
  public renderizarNuvem(pontosExplorados: Array<Coordenada>) {}
}
