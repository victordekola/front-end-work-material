import { Component, OnInit, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.scss'],
  providers: [MessageService] 
})
export class FuncionariosListComponent {
  funcionarios: Funcionario[] = [];
  event = Event;
  loading: boolean = true;

  constructor(private service: FuncionariosService) {}

  ngOnInit(): void {

    this.service.getFuncionariosSmall().then(response => {
      this.funcionarios = response;
      this.loading = false;
      
       });
  }

  applyFilter(event: Event, table: Table)  {
    const filterValue = (event.target as HTMLInputElement).value;
   table.filterGlobal(filterValue.trim().toLocaleLowerCase(), 'contains');
    
    // filterG = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }



  clear(table: Table) {
    table.clear();
  }
}
