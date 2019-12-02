import { Usuario } from "./usuario";
import { mockUsuarios } from "src/mocks/usuario-mock";

describe("Usuario", () => {
  it("should create an instance", () => {
    expect(new Usuario(mockUsuarios[0])).toBeTruthy();
  });
});
