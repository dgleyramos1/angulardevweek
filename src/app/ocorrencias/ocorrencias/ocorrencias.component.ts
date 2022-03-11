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

  regioes: Regiao[] = [];
  faixaetarias: Faixaetaria[] = [];
  constructor(
    private regiaoServico: RegiaoService,
    private faixaEtariaService: FaixaEtariaService
  ) { }

  ngOnInit(): void {
    this.listarRegioes();
    this.listarFaixas();
  }

  private listarRegioes(): void {
      this.regioes = this.regiaoServico.listRegioes();
    
  }

  private listarFaixas(): void{ 
      this.faixaetarias = this.faixaEtariaService.listRegioes();
  }
}
