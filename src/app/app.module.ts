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
import { ViewMessageComponent } from './messages/pages/view-message/view-message.component';
import { AddMessageComponent } from './messages/pages/add-message/add-message.component';
import { EditMessageComponent } from './messages/pages/edit-message/edit-message.component';

import { CoreModule } from './core/core.module';

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
    ViewMessageComponent,
    AddMessageComponent,
    EditMessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
