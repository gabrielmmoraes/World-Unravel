import { Pontuacao } from "./pontuacao";
import { mockUsuarios } from "src/mocks/usuario-mock";

describe("Pontuacao", () => {
  it("should create an instance", () => {
    expect(new Pontuacao(mockUsuarios[0].coordenadas)).toBeTruthy();
  });
});
