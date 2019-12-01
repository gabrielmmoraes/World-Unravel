import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapaComponent } from "./mapa/mapa.component";
import { PlacarLideresComponent } from "./placar-lideres/placar-lideres.component";
import { GruposComponent } from "./grupos/grupos.component";
import { BuscaComponent } from "./busca/busca.component";
import { DataResolverMapa } from "src/data-resolvers/data-resolver-mapa";
// import { ContaComponent } from './conta/conta.component';

const routes: Routes = [
  {
    path: "",
    component: MapaComponent,
    resolve: { usuarios: DataResolverMapa }
  },
  {
    path: "leaderboards",
    component: PlacarLideresComponent
  },
  {
    path: "grupos",
    component: GruposComponent
  },
  {
    path: "busca",
    component: BuscaComponent
  } /*,
  {
    path: 'conta',
    component: ContaComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
