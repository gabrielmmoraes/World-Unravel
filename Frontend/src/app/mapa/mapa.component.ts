import { Component, OnInit } from "@angular/core";
import { Mapa } from "../../models/mapa/mapa";
import { mockUsuarios } from "src/mocks/usuario-mock";
import { Usuario } from "src/models/usuario/usuario";
import { AppService } from "../app.service";
import { Dificuldade } from "src/models/dificuldade/dificuldade";
import { ActivatedRoute } from "@angular/router";
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  public googleMaps: Mapa;
  public usuario: Usuario;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const usuarios = this.route.snapshot.data["usuarios"];
    const [
      { id, nomeDoUsuario, coordenadas, dificuldade }
    ] = usuarios.data.usuarios;
    this.usuario = new Usuario({
      id,
      nome: nomeDoUsuario,
      coordenadas,
      dificuldade: (Dificuldade[dificuldade] as unknown) as Dificuldade
    });
    this.googleMaps = new Mapa(this.usuario.coordenadas);
    this.googleMaps.renderizarNuvem();
  }

  public mostrarCoordenada(event: Event) {
    console.log(event);
  }
}
