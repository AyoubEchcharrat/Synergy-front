import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [CommonModule, RouterLink],
  exports: [SidebarComponent, HeaderComponent],
})
export class CoreModule {}
