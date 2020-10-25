import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscolaRoutingModule } from './escola-routing.module';
import { IndexComponent } from './index/index.component';
import { NovoComponent } from './novo/novo.component';
import { EditarComponent } from './editar/editar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent, NovoComponent, EditarComponent],
  imports: [
    CommonModule,
    EscolaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EscolaModule { }
