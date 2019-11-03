import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { PlacarLideresComponent } from './placar-lideres/placar-lideres.component';

const routes: Routes = [
  {
    path: '',
    component: MapaComponent
  },
  {
    path: 'leaderboards',
    component: PlacarLideresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
