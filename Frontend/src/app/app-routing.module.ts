import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapaComponent } from "./mapa/mapa.component";
import { PlacarLideresComponent } from "./placar-lideres/placar-lideres.component";
import { GruposComponent } from "./grupos/grupos.component";
import { BuscaComponent } from "./busca/busca.component";
import { DataResolverUsuarios } from "src/data-resolvers/data-resolver-usuarios";
import { DataResolverGrupos } from "src/data-resolvers/data-resolver-grupos";
// import { ContaComponent } from './conta/conta.component';

const routes: Routes = [
  {
    path: "",
    component: MapaComponent,
    resolve: { usuarios: DataResolverUsuarios }
  },
  {
    path: "leaderboards",
    component: PlacarLideresComponent,
    resolve: { usuarios: DataResolverUsuarios }
  },
  {
    path: "grupos",
    component: GruposComponent,
    resolve: { usuarios: DataResolverUsuarios, grupos: DataResolverGrupos }
  },
  {
    path: "busca",
    component: BuscaComponent,
    resolve: { usuarios: DataResolverUsuarios }
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
