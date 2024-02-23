import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './pages/list-users/list-users.component';



@NgModule({
  declarations: [
    ListUsersComponent
  ],
  exports: [
    ListUsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
