import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelsService } from '../../services/channels.service';
import { ViewMessage } from '../../../core/models/view-message';
import { MessagesStoreService } from '../../../messages/services/messages-store.service';
import {PublicMessage} from "../../../core/models/public-messages";

@Component({
  selector: 'app-view-channel',
  templateUrl: './view-channel.component.html',
  styleUrl: './view-channel.component.css',
})
export class ViewChannelComponent implements OnInit {
  id!: number;
  messages: ViewMessage[] =  [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private channelService: ChannelsService,
    private messagesStoreService: MessagesStoreService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (this.id) {
      this.channelService
        .getChannelMessagesByChannelId(this.id)
        .subscribe((data) => {

          for (let msg of data) {
            this.messages = [...this.messages, this.convertMessageToViewMessage(msg)];
          }

          console.log(this.messages);
        });
    }
  }

  convertMessageToViewMessage(message: PublicMessage): ViewMessage {
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
