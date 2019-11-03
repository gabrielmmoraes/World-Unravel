import { Coordenada } from '../coordenada/coordenada';

export class Mapa {
  public coordenadaFoco: Coordenada;
  public coordenadasUsuario: Array<Coordenada>;

  constructor(arrayCoordenadas: Array<Coordenada>) {
    this.coordenadasUsuario = arrayCoordenadas;
    this.coordenadaFoco = arrayCoordenadas[arrayCoordenadas.length - 1];
  }
  public renderizarNuvem(pontosExplorados: Array<Coordenada>) {
    console.log('Renderizando fog...');
  }
}
