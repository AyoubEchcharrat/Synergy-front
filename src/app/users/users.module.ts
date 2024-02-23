import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { RouterLink } from '@angular/router';
import { LoginUsersComponent } from './pages/login-users/login-users.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListUsersComponent, LoginUsersComponent],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    UsersRoutingModule,
    ModalModule.forRoot(),
  ],
  exports: [ListUsersComponent, LoginUsersComponent],
})
export class UsersModule {}
