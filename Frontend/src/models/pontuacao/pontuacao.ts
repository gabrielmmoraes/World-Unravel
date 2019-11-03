import { Coordenada } from '../coordenada/coordenada';
import { Usuario } from '../usuario/usuario';
import { distanciaLatLng } from 'src/utils/calculoGPS';
import { Dificuldade } from '../dificuldade/dificuldade';

export class Pontuacao {
  public coordenadas: Array<Coordenada>;

  constructor(coordenadas: Array<Coordenada>) {
    this.coordenadas = coordenadas;
  }

  public calcularPontuacao(dificuldade: Dificuldade): number {
    return this.coordenadas.reduce((acumulador, coordenada, index) => {
      if (index < this.coordenadas.length - 1) {
        return (
          acumulador +
          distanciaLatLng(coordenada, this.coordenadas[index + 1]) * dificuldade
        );
      } else {
        return acumulador;
      }
    }, 0);
  }

  public atualizarPontuacao({
    usuario,
    novaCoordenada
  }: {
    usuario: Usuario;
    novaCoordenada: Coordenada;
  }): number {
    return 100;
  }
}
