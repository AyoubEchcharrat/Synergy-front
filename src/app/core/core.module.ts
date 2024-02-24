import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { ChannelsModule } from '../channels/channels.module';
import { UsersModule } from '../users/users.module';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [CommonModule, RouterLink, ChannelsModule, UsersModule],
  exports: [SidebarComponent, HeaderComponent],
})
export class CoreModule {}
