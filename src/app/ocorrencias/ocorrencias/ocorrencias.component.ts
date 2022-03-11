import { OcorrenciaService } from './../service/ocorrencia.service copy 2';
import { Ocorrencia } from './../model/ocorrencia';
import { RegiaoService } from './../service/regiao.service';
import { Faixaetaria } from './../model/faixaetaria';
import { FaixaEtariaService } from './../service/faixa-etaria.service copy';
import { Regiao } from '../model/regiao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css']
})
export class OcorrenciasComponent implements OnInit {

  ocorrencia_exame: Ocorrencia[] = [];
  regioes: Regiao[] = [];
  faixaetarias: Faixaetaria[] = [];
  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regiaoServico: RegiaoService,
    private faixaEtariaService: FaixaEtariaService
  ) { }

  ngOnInit(): void {
    this.listarRegioes();
    this.listarOcorrencias();
    this.listarFaixas();
  }

  private listarRegioes(): void {
      this.regioes = this.regiaoServico.listRegioes();
    
  }
  private listarOcorrencias(): void{
      this.ocorrencia_exame = this.ocorrenciaService.listOcorrencia();
  }

  private listarFaixas(): void{ 
      this.faixaetarias = this.faixaEtariaService.listFaixaEtarias();
  }
}
