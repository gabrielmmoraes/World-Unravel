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
  private googleMaps: Mapa;
  private usuario: Usuario;
  private radius: number;
  private area: number;
  private styles: any;
  private fog: any;
  private explored: any;

  constructor(private route: ActivatedRoute) {}

  initialize() {
    // Create the map.

    let outerbounds = [
      { lat: 85, lng: 180 },
      { lat: 85, lng: 90 },
      { lat: 85, lng: 0 },
      { lat: 85, lng: -90 },
      { lat: 85, lng: -180 },
      { lat: 0, lng: -180 },
      { lat: -85, lng: -180 },
      { lat: -85, lng: -90 },
      { lat: -85, lng: 0 },
      { lat: -85, lng: 90 },
      { lat: -85, lng: 180 },
      { lat: 0, lng: 180 },
      { lat: 85, lng: 180 }
    ];

    this.fog = [outerbounds];
    for (let coordenada of this.usuario.coordenadas){
      this.fog.push(this.drawCircle(coordenada, 1, -1));
    }

    this.explored = this.fog.slice(1);

  }

  drawCircle(point, radius, dir) { 
    let d2r = Math.PI / 180;   // degrees to radians 
    let r2d = 180 / Math.PI;   // radians to degrees 
    let earthsradius = 6378; // 6378 is the radius of the earth in kilometers
    let points = 64;

    // find the raidus in lat/lon 
    let rlat = (radius / earthsradius) * r2d; 
    let rlng = rlat / Math.cos(point.latitude * d2r); 

    let extp = [];
    
    if (dir==1) {
      var start=0;
      var end=points+1
    } // one extra here makes sure we connect the
    else {
      var start=points+1;
      var end=0
    }
    
    for (let i=start; (dir==1 ? i < end : i > end); i=i+dir)  
    {
        let theta = Math.PI * (i / (points/2)); 
        let ey = point.longitude + (rlng * Math.cos(theta)); // center a + radius x * cos(theta) 
        let ex = point.latitude + (rlat * Math.sin(theta)); // center b + radius y * sin(theta) 
        extp.push({ lat: ex, lng: ey }); 
    }
    return extp;
  }

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

    this.area = google.maps.geometry.spherical.computeArea(this.explored);
    console.log(this.area);
  }

  public mostrarCoordenada(event: Event) {
    console.log(event);
  }
}
