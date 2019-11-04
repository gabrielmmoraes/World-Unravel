import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlacarLideresComponent } from './placar-lideres/placar-lideres.component';
import { PontuacaoComponent } from './pontuacao/pontuacao.component';
import { GruposComponent } from './grupos/grupos.component';
import { BuscaComponent } from './busca/busca.component';
// import { ContaComponent } from './conta/conta.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    NavbarComponent,
    PlacarLideresComponent,
    PontuacaoComponent,
    GruposComponent
    BuscaComponent
    // ContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaGx_lFRzU94_bsVn9eHIZYDAfhckJKJw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
