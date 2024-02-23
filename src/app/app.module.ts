import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUsersComponent } from './users/pages/register-users/register-users.component';
import { ProfilUsersComponent } from './users/pages/profil-users/profil-users.component';
import { EditUsersComponent } from './users/pages/edit-users/edit-users.component';
import { ViewMessageComponent } from './messages/pages/view-message/view-message.component';
import { AddMessageComponent } from './messages/pages/add-message/add-message.component';
import { EditMessageComponent } from './messages/pages/edit-message/edit-message.component';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CoreModule } from './core/core.module';
import { ChannelsModule } from './channels/channels.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUsersComponent,
    ProfilUsersComponent,
    EditUsersComponent,
    ViewMessageComponent,
    AddMessageComponent,
    EditMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CoreModule,
    ChannelsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
