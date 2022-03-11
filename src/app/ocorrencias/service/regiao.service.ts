import { Regiao } from './../model/regiao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor(
    private http: HttpClient,
  ) { }

  listRegioes(): Observable<Regiao[]> {
    //const url = '/assets/regiao.json';
    const url ="/api/regioes"
    return this.http.get<Regiao[]>(url);
  }
}
