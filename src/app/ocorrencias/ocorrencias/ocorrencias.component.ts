import { OcorrenciaService } from './../service/ocorrencia.service copy 2';
import { Ocorrencia } from './../model/ocorrencia';
import { RegiaoService } from './../service/regiao.service';
import { Faixaetaria } from './../model/faixaetaria';
import { FaixaEtariaService } from './../service/faixa-etaria.service copy';
import { Regiao } from '../model/regiao';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css']
})
export class OcorrenciasComponent implements OnInit, OnDestroy {

  ocorrencia_exame: Ocorrencia[] = [];
  regioes: Regiao[] = [];
  faixaetarias: Faixaetaria[] = [];

  readonly subscriptions = new Subscription();

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regiaoService: RegiaoService,
    private faixaEtariaService: FaixaEtariaService
  ) { }

  ngOnInit(): void {
    this.listarRegioes();
    this.listarOcorrencias();
    this.listarFaixas();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private listarRegioes(): void {
    const subscription = this.regiaoService.listRegioes().subscribe((regioes => {
      this.regioes = regioes;
    }));

    this.subscriptions.add(subscription);
  }

  private listarOcorrencias(): void{
    const subscriptionOcorrencias = this.ocorrenciaService.listOcorrencias().subscribe((
        ocorrecias => {this.ocorrencia_exame = ocorrecias
      }
    ));

    this.subscriptions.add(subscriptionOcorrencias);
  }

  private listarFaixas(): void{
    const subscriptionFaixas = this.faixaEtariaService.listFaixaEtaria().subscribe(( 
      faixa => {this.faixaetarias = faixa}
    ));

    this.subscriptions.add(subscriptionFaixas)
  }
}
