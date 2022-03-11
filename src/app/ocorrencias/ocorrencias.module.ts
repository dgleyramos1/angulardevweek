import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { OcorrenciasRoutingModule } from './ocorrencias-routing.module';
import { RegiaoComponent } from './regiao/regiao.component';



@NgModule({
  declarations: [
    RegiaoComponent
  ],
  imports: [
    CommonModule,
    OcorrenciasRoutingModule,
    MatSortModule,
    MatCardModule
  ]
})
export class OcorrenciasModule { }
