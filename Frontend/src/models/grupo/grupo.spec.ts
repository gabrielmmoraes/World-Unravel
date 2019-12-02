import { Grupo } from "./grupo";
import { mockGrupos } from "src/mocks/grupo-mock";

describe("Grupo", () => {
  it("should create an instance", () => {
    expect(new Grupo(mockGrupos[0])).toBeTruthy();
  });
});
