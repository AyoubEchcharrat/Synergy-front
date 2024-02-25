import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CoreModule } from './core/core.module';
import { ChannelsModule } from './channels/channels.module';
import {ErrorsModule} from "./errors/errors.module";
import {MessagesModule} from "./messages/messages.module";

@NgModule({
  declarations: [
    AppComponent,
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
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
