import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUsersComponent } from './users/pages/register-users/register-users.component';
import { LoginUsersComponent } from './users/pages/login-users/login-users.component';
import { ProfilUsersComponent } from './users/pages/profil-users/profil-users.component';
import { EditUsersComponent } from './users/pages/edit-users/edit-users.component';
import { ViewChannelComponent } from './channels/pages/view-channel/view-channel.component';
import { AddChannelComponent } from './channels/pages/add-channel/add-channel.component';
import { EditChannelComponent } from './channels/pages/edit-channel/edit-channel.component';
import { HeadersComponent } from './core/headers/headers.component';
import { SidebarRightComponent } from './core/sidebar-right/sidebar-right.component';
import { SidebarLeftComponent } from './core/sidebar-left/sidebar-left.component';
import { ViewMessageComponent } from './messages/pages/view-message/view-message.component';
import { AddMessageComponent } from './messages/pages/add-message/add-message.component';
import { EditMessageComponent } from './messages/pages/edit-message/edit-message.component';
import { ChannelsTsComponent } from './core/models/channels.ts/channels.ts.component';
import { UsersTsComponent } from './core/models/users.ts/users.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUsersComponent,
    LoginUsersComponent,
    ProfilUsersComponent,
    EditUsersComponent,
    ViewChannelComponent,
    AddChannelComponent,
    EditChannelComponent,
    HeadersComponent,
    SidebarRightComponent,
    SidebarLeftComponent,
    ViewMessageComponent,
    AddMessageComponent,
    EditMessageComponent,
    ChannelsTsComponent,
    UsersTsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
