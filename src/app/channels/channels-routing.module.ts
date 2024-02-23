import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewChannelComponent } from './pages/view-channel/view-channel.component';
import { AddChannelComponent } from './pages/add-channel/add-channel.component';
import { EditChannelComponent } from './pages/edit-channel/edit-channel.component';
import { ListChannelsComponent } from './pages/list-channels/list-channels.component';

const routes: Routes = [
  { path: 'add', component: AddChannelComponent },
  { path: 'edit/:id', component: EditChannelComponent },
  { path: 'view/:id', component: ViewChannelComponent },
  { path: 'list', component: ListChannelsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelsRoutingModule {}
