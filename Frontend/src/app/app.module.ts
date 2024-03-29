/// <reference types="@types/googlemaps" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapaComponent } from "./mapa/mapa.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PlacarLideresComponent } from "./placar-lideres/placar-lideres.component";
import { PontuacaoComponent } from "./pontuacao/pontuacao.component";
import { GruposComponent } from "./grupos/grupos.component";
import { BuscaComponent } from "./busca/busca.component";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "./busca/filter.pipe";
import { HttpClientModule } from "@angular/common/http";
// import { ContaComponent } from './conta/conta.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    MapaComponent,
    NavbarComponent,
    PlacarLideresComponent,
    PontuacaoComponent,
    GruposComponent,
    BuscaComponent
    //ContaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCoF7PcqyVdLNE1aVWeZ6M-6Mdyoo4IKzA',
      libraries: ['drawing']
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
