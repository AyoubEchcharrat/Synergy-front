import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUsersComponent } from './users/pages/register-users/register-users.component';
import { LoginUsersComponent } from './users/pages/login-users/login-users.component';
import { ProfilUsersComponent } from './users/pages/profil-users/profil-users.component';
import { EditUsersComponent } from './users/pages/edit-users/edit-users.component';
import { ViewMessageComponent } from './messages/pages/view-message/view-message.component';
import { AddMessageComponent } from './messages/pages/add-message/add-message.component';
import { EditMessageComponent } from './messages/pages/edit-message/edit-message.component';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { ChannelsModule } from './channels/channels.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUsersComponent,
    LoginUsersComponent,
    ProfilUsersComponent,
    EditUsersComponent,
    ViewMessageComponent,
    AddMessageComponent,
    EditMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChannelsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
