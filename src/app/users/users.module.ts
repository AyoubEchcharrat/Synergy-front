import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { RouterLink } from '@angular/router';
import { LoginUsersComponent } from './pages/login-users/login-users.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUsersComponent } from './pages/register-users/register-users.component';
import { EditUsersComponent } from './pages/edit-users/edit-users.component';
import { ProfilUsersComponent } from './pages/profil-users/profil-users.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    LoginUsersComponent,
    RegisterUsersComponent,
    EditUsersComponent,
    ProfilUsersComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    UsersRoutingModule,
    ModalModule.forRoot(),
  ],
  exports: [
    ListUsersComponent,
    LoginUsersComponent,
    RegisterUsersComponent,
    EditUsersComponent,
    ProfilUsersComponent,
  ],
})
export class UsersModule {}
