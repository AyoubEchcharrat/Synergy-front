import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewConversationComponent } from './pages/view-conversation/view-conversation.component';
import { ViewMessageComponent } from './pages/view-message/view-message.component';
import { AddMessageComponent } from './pages/add-message/add-message.component';
import { EditMessageComponent } from './pages/edit-message/edit-message.component';
import { RouterLink } from '@angular/router';
import { MessagesRoutingModule } from './messages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewMessageComponent,
    AddMessageComponent,
    EditMessageComponent,
    ViewConversationComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MessagesRoutingModule,
  ],
  exports: [
    ViewMessageComponent,
    AddMessageComponent,
    EditMessageComponent,
    ViewConversationComponent,
  ],
})
export class MessagesModule {}
