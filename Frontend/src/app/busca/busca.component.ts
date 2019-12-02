import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/models/usuario/usuario";
import { mockUsuarios } from "src/mocks/usuario-mock";
import { ActivatedRoute } from "@angular/router";
import { Dificuldade } from "src/models/dificuldade/dificuldade";

@Component({
  selector: "app-busca",
  templateUrl: "./busca.component.html",
  styleUrls: ["./busca.component.css"]
})
export class BuscaComponent implements OnInit {
  private usuarios: Array<Usuario>;
  private usuarioBusca = "";

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

    this.usuarios = this.usuarios.sort((usuario1, usuario2) => {
      if (usuario1.nome < usuario2.nome) {
        return -1;
      }
      if (usuario1.nome > usuario2.nome) {
        return 1;
      }
      return 0;
    });
  }
}
