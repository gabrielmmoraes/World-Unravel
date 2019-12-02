import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/models/usuario/usuario";
import { mockUsuarios } from "src/mocks/usuario-mock";
import { ActivatedRoute } from "@angular/router";
import { Dificuldade } from "src/models/dificuldade/dificuldade";

@Component({
  selector: "app-placar-lideres",
  templateUrl: "./placar-lideres.component.html",
  styleUrls: ["./placar-lideres.component.css"]
})
export class PlacarLideresComponent implements OnInit {
  private usuarios: Array<Usuario>;

  constructor(private route: ActivatedRoute) {
    this.usuarios = [];
  }

  ngOnInit() {
    const usuarios = this.route.snapshot.data["usuarios"].data.usuarios;
    usuarios.forEach(usuario => {
      let { id, nomeDoUsuario, coordenadas, dificuldade } = usuario;
      this.usuarios.push(
        new Usuario({
          id,
          nome: nomeDoUsuario,
          coordenadas,
          dificuldade: (Dificuldade[dificuldade] as unknown) as Dificuldade
        })
      );
    });
    this.usuarios = mockUsuarios.sort((usuario1, usuario2) => {
      return usuario2.pontuacao - usuario1.pontuacao;
    });
  }
}
