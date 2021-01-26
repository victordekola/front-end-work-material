import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.scss']
})
export class FuncionariosFormComponent implements OnInit {

  cabecalho: string='';
  constructor() { }

  ngOnInit(): void {
    this.cabecalho = 'Cadastro de Funcionarios';
  }

}
