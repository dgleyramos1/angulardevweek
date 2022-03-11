import { Regiao } from './../model/regiao';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor() { }

  listRegioes(): Regiao[]{
    return[
      {id: 1, regiao: 'Norte', total_exames:1564},
      {id: 2, regiao: 'Nordeste', total_exames:2500},
      {id: 3, regiao: 'Sudeste', total_exames:3500}
    ];
  }
}
