import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmaRoutingModule } from './turma-routing.module';
import { IndexComponent } from './index/index.component';
import { NovoComponent } from './novo/novo.component';
import { EditarComponent } from './editar/editar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [IndexComponent, NovoComponent, EditarComponent],
  imports: [
    CommonModule,
    TurmaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TurmaModule { }
