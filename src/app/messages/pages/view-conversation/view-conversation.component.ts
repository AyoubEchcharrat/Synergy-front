import {Component, OnInit} from '@angular/core';
import {ViewMessageService} from "../../services/view-message.service";
import {ActivatedRoute} from "@angular/router";
import {MessagesStoreService} from "../../services/messages-store.service";
import {ViewMessage} from "../../../core/models/view-message";
import {PrivateMessage} from "../../../core/models/private-messages";

@Component({
  selector: 'app-view-conversation',
  templateUrl: './view-conversation.component.html',
  styleUrl: './view-conversation.component.css'
})
export class ViewConversationComponent implements OnInit{
  idCurrent!: number;
  idRecipient!: number;
  messages: ViewMessage[] =  [];
  constructor(private viewMessageService: ViewMessageService,
              private activatedRoute: ActivatedRoute,
              private messagesStoreService: MessagesStoreService) {
  }

  ngOnInit(): void {
    this.idCurrent = Number(this.activatedRoute.snapshot.paramMap.get('idCurrent'));
    this.idRecipient = Number(this.activatedRoute.snapshot.paramMap.get('idRecipient'));

    if (this.idCurrent && this.idRecipient) {
      this.viewMessageService
        .getAllConversationMessages(this.idCurrent,this.idRecipient)
        .subscribe((data) => {

          for (let msg of data) {
            this.messages = [...this.messages, this.convertMessageToViewMessage(msg)];
          }

          console.log(this.messages);
        });
    }

  }

  convertMessageToViewMessage(message: PrivateMessage): ViewMessage {
    const creationDate = this.getDateFormatString(new Date(message.creationDate));
    let updateDate = '';
    if(message.updateDate) {
      updateDate = this.getDateFormatString(new Date(message.updateDate));
    }

    return {
      id : message.id,
      content: message.content,
      sender: message.sender.username,
      creationDate: creationDate,
      updateDate: updateDate,
      icon: '',
      upvoters: message.upvoters.length,
      downvoters: message.downvoters.length
    };
  }

  getDateFormatString(date: Date): string {
    let dateFormatString = '';
    if(date.getDate() == new Date().getDate()) {
      dateFormatString += "aujourd'hui";
    } else if (date.getDate() == (new Date().getDate() - 1)) {
      dateFormatString += "hier";
    } else {
      dateFormatString += date.toLocaleString('fr-FR',
        { year: 'numeric', month: 'numeric', day: 'numeric'});
    }
    dateFormatString += ' ' + date.toLocaleString('fr-FR',
      { hour: 'numeric', minute: 'numeric', hour12: false });

    return dateFormatString;
  }


}
