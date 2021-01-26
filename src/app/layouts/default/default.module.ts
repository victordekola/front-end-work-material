import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FuncionariosListComponent } from './../../admin/funcionarios/funcionarios-list/funcionarios-list.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { PostsComponent } from './../../modules/posts/posts.component';
import { DefaultComponent } from './default.component';
import {FieldsetModule} from 'primeng/fieldset';
import { FuncionariosFormComponent } from 'src/app/admin/funcionarios/funcionarios-form/funcionarios-form.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    FuncionariosListComponent,
    FuncionariosFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    InputMaskModule,
    InputTextModule,
    ToastModule,
    TableModule,
    FormsModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    HttpClientModule,
    ButtonModule,
    FieldsetModule,
    CardModule
    
  ],
  providers: [
    DashboardService,
    FuncionariosService
  ]
})
export class DefaultModule { }
