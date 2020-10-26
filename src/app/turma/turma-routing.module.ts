import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NovoComponent } from './novo/novo.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path: 'turma', redirectTo: 'turma/index', pathMatch: 'full'},
  { path: 'turma/index', component: IndexComponent },
  { path: 'turma/novo', component: NovoComponent },
  { path: 'turma/:escolaId/:turmaId/editar', component: EditarComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaRoutingModule { }
