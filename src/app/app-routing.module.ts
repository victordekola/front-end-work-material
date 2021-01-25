import { FuncionariosListComponent } from './admin/funcionarios/funcionarios-list/funcionarios-list.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionariosFormComponent } from './admin/funcionarios/funcionarios-form/funcionarios-form.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
  {  path: 'posts',
    component: PostsComponent

  },
  {
    path: 'admin/funcionarios/list',
    component: FuncionariosListComponent
  },
  {
    path: 'admin/funcionarios/form',
    component: FuncionariosFormComponent
  }

]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
