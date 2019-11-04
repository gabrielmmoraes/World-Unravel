import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { PlacarLideresComponent } from './placar-lideres/placar-lideres.component';
import { GruposComponent } from './grupos/grupos.component';
import { BuscaComponent } from './busca/busca.component';
// import { ContaComponent } from './conta/conta.component';

const routes: Routes = [
  {
    path: '',
    component: MapaComponent
  },
  {
    path: 'leaderboards',
    component: PlacarLideresComponent
  },
  {
    path: 'grupos',
    component: GruposComponent
  },
  {
    path: 'buscar-usuarios',
    component: BuscaComponent
  }/*,
  {
    path: 'conta',
    component: ContaComponent
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
