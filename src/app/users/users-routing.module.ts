import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { RegisterUsersComponent } from './pages/register-users/register-users.component';
import { EditUsersComponent } from './pages/edit-users/edit-users.component';
import { LoginUsersComponent } from './pages/login-users/login-users.component';

const routes: Routes = [
  { path: 'list', component: ListUsersComponent },
  { path: 'add', component: RegisterUsersComponent },
  { path: 'edit/:id', component: EditUsersComponent },
  { path: 'login', component: LoginUsersComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
