import { Mapa } from "./mapa";
import { mockUsuarios } from "src/mocks/usuario-mock";

describe("Mapa", () => {
  it("should create an instance", () => {
    expect(new Mapa(mockUsuarios[0].coordenadas)).toBeTruthy();
  });
});
