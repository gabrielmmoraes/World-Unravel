import { Component, OnInit } from "@angular/core";
import { Grupo } from "src/models/grupo/grupo";
import { mockGrupos } from "src/mocks/grupo-mock";
import { Usuario } from "src/models/usuario/usuario";
import { ActivatedRoute } from "@angular/router";
import { Dificuldade } from "src/models/dificuldade/dificuldade";
import { Coordenada } from "src/models/coordenada/coordenada";

@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.component.html",
  styleUrls: ["./grupos.component.css"]
})
export class GruposComponent implements OnInit {
  private grupos: Array<Grupo>;

  constructor(private route: ActivatedRoute) {
    this.grupos = [];
  }

  ngOnInit() {
    const usuarios = this.route.snapshot.data["usuarios"].data.usuarios;
    const grupos = this.route.snapshot.data["grupos"].data.grupos;
    this._mapDadosRotaParaGrupos(usuarios, grupos);
    this.grupos = this.grupos.sort((grupo1, grupo2) => {
      return grupo2.pontuacao - grupo1.pontuacao;
    });
  }

  private _integrantesToString(integrantes: Array<Usuario>): string {
    const integrantesStr = integrantes.reduce((accum, integrante) => {
      if (accum === "") return integrante.nome;
      return accum + ", " + integrante.nome;
    }, "");

    return integrantesStr;
  }

  private _mapDadosRotaParaGrupos(usuarios, grupos) {
    grupos.forEach(grupo => {
      let novoGrupo = { nome: grupo.nomeDoGrupo, integrantes: [] };
      grupo.usuarios.forEach(usuarioGrupo => {
        usuarios.forEach(usuario => {
          if (usuarioGrupo.id === usuario.id) {
            const { id, nomeDoUsuario, coordenadas, dificuldade } = usuario;
            novoGrupo.integrantes.push(
              new Usuario({
                id,
                nome: nomeDoUsuario,
                coordenadas: coordenadas as Array<Coordenada>,
                dificuldade: (Dificuldade[
                  dificuldade
                ] as unknown) as Dificuldade
              })
            );
          }
        });
      });
      this.grupos.push(new Grupo(novoGrupo));
    });
  }
}
