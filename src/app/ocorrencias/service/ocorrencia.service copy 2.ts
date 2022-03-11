import { Ocorrencia } from './../model/ocorrencia';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  constructor() { }

  listOcorrencia(): Ocorrencia[]{
    return[
        { id: 1, regiao_id: 2, mes: 5, faixa_id: 1, qnt_exames: 44 }
      ];
  }
}
