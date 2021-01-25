import { Funcionario } from './../admin/funcionarios/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class FuncionariosService {

  apiURL: string = environment.apiURLBase + '/api/funcionarios';

  constructor(private http: HttpClient) { }

  getFuncionariosSmall() {
    return this.http
    .get<Funcionario[]>(this.apiURL)
    .toPromise()
    .then(res => <Funcionario[]>res) 
    .then(data => { 
         return data; 
    });
  }
}
