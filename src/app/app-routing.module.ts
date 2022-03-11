import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';

const routes: Routes = [
  {
    path:'', pathMatch: 'full', redirectTo: 'ocorrencias'
  },
  {
    path: 'ocorrencias',
    loadChildren: () => import('./ocorrencias/ocorrencias.module').then(n => OcorrenciasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
