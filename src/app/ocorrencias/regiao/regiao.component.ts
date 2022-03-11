import { RegiaoService } from '../service/regiao.service';
import { Regiao } from '../model/regiao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.css']
})
export class RegiaoComponent implements OnInit {

  regioes: Regiao[] = [];
  constructor(private regiaoServico: RegiaoService) { }

  ngOnInit(): void {
    this.regioes = this.regiaoServico.listRegioes();
  }

}
