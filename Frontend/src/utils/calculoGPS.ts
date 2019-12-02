import { Coordenada } from 'src/models/coordenada/coordenada';

/**
 * Converte um número em graus para radiano
 * @param grau número em grau a se transformar em radiano
 */
export const grauParaRadiano = (grau: number): number => {
  return grau * (Math.PI / 180);
};

/**
 * Retorna a distância em km de dois pontos a partir de suas latitudes e longitudes.
 * Abordagem de acordo com o link https://andrew.hedges.name/experiments/haversine/
 * @param ponto1 ponto do tipo Coordenada
 * @param ponto2 ponto do tipo Coordenada
 */
export const distanciaLatLng = (
  ponto1: Coordenada,
  ponto2: Coordenada
): number => {
  const raioTerra = 6373.0;

  const dlon =
    grauParaRadiano(ponto2.longitude) - grauParaRadiano(ponto1.longitude);

  const dlat =
    grauParaRadiano(ponto2.latitude) - grauParaRadiano(ponto2.latitude);

  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(grauParaRadiano(ponto1.latitude)) *
      Math.cos(grauParaRadiano(ponto2.latitude)) *
      Math.sin(dlon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = raioTerra * c;

  return distance;
};
