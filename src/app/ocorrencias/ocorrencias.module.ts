import { RegiaoService } from './service/regiao.service';
import { FaixaEtariaService } from './service/faixa-etaria.service copy';
import { OcorrenciaService } from './service/ocorrencia.service copy 2';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OcorrenciasRoutingModule } from './ocorrencias-routing.module';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';



@NgModule({
  declarations: [
    OcorrenciasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatToolbarModule,
    OcorrenciasRoutingModule
  ],
  providers: [
    OcorrenciaService,
    RegiaoService,
    FaixaEtariaService
  ]
})
export class OcorrenciasModule { }
