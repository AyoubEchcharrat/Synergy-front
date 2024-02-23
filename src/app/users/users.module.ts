import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [ListUsersComponent],
  imports: [CommonModule, RouterLink],
  exports: [ListUsersComponent],
})
export class UsersModule {}
