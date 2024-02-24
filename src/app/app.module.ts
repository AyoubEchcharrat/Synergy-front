import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMessageComponent } from './messages/pages/view-message/view-message.component';
import { AddMessageComponent } from './messages/pages/add-message/add-message.component';
import { EditMessageComponent } from './messages/pages/edit-message/edit-message.component';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CoreModule } from './core/core.module';
import { ChannelsModule } from './channels/channels.module';
import {ErrorsModule} from "./errors/errors.module";

@NgModule({
  declarations: [
    AppComponent,
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
    ErrorsModule,
    ChannelsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
