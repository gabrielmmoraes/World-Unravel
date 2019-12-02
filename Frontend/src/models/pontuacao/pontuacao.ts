import { Coordenada } from '../coordenada/coordenada';
import { Usuario } from '../usuario/usuario';
import { distanciaLatLng } from 'src/utils/calculoGPS';
import { Dificuldade } from '../dificuldade/dificuldade';

export class Pontuacao {
  public coordenadas: Array<Coordenada>;

  constructor(coordenadas: Array<Coordenada>) {
    this.coordenadas = coordenadas;
  }

  /**
   * Percorre todo o array de coordenadas e calcula a distância entre pares de pontos.
   * A distância é registrada em metros e aplicada o peso de acordo com a dificuldade.
   * @param dificuldade Define o peso que será aplicado nas distâncias
   */
  public calcularPontuacao(dificuldade: Dificuldade): number {
    return Math.round(
      this.coordenadas.reduce((acumulador, coordenada, index) => {
        if (index < this.coordenadas.length - 1) {
          return (
            acumulador +
            distanciaLatLng(coordenada, this.coordenadas[index + 1]) *
              dificuldade *
              1000
          );
        } else {
          return acumulador;
        }
      }, 0)
    );
  }

  /**
   * Adiciona coordenada ao array do usuário e recalcula a pontuação
   * @param usuario Usuário que terá coordenada adicionada
   * @param novaCoordenada Coordenada a ser adicionada
   */
  public atualizarPontuacao({
    usuario,
    novaCoordenada
  }: {
    usuario: Usuario;
    novaCoordenada: Coordenada;
  }): number {
    usuario.coordenadas.push(novaCoordenada);
    return this.calcularPontuacao(usuario.dificuldade);
  }
}
