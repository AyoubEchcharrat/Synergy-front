import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewChannelComponent} from "./pages/view-channel/view-channel.component";
import {AddChannelComponent} from "./pages/add-channel/add-channel.component";
import {EditChannelComponent} from "./pages/edit-channel/edit-channel.component";
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ChannelsRoutingModule} from "./channels-routing.module";
import {ModalModule} from "ngx-bootstrap/modal";
import { ListChannelsComponent } from './pages/list-channels/list-channels.component';



@NgModule({
  declarations: [
    ViewChannelComponent,
    AddChannelComponent,
    EditChannelComponent,
    ListChannelsComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    ChannelsRoutingModule,
    ModalModule.forRoot()
  ],
  exports: [
    ViewChannelComponent,
    AddChannelComponent,
    EditChannelComponent
  ]
})
export class ChannelsModule { }
