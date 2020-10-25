import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NovoComponent } from './novo/novo.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path: 'escola', redirectTo: 'escola/index', pathMatch: 'full'},
  { path: 'escola/index', component: IndexComponent },
  { path: 'escola/novo', component: NovoComponent },
  { path: 'escola/:escolaId/editar', component: EditarComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolaRoutingModule { }
