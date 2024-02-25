import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ViewConversationComponent} from "./pages/view-conversation/view-conversation.component";


const routes: Routes = [
  { path: ':idRecipient', component: ViewConversationComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
