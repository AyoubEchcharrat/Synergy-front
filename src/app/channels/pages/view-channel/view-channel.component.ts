import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ChannelsService } from '../../services/channels.service';
import { ViewMessage } from '../../../core/models/view-message';
import { PublicMessage } from '../../../core/models/public-messages';
import { User } from '../../../core/models/users';
import { ChannelsStoreService } from '../../services/channels-store.service';
import { Channel } from '../../../core/models/channels';

@Component({
  selector: 'app-view-channel',
  templateUrl: './view-channel.component.html',
  styleUrl: './view-channel.component.css',
})
export class ViewChannelComponent implements OnInit {
  id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  messages: ViewMessage[] = [];
  currentUser!: User;
  currentChannel: Channel | undefined;
  isChannelNameEdit: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private channelService: ChannelsService,
    private channelStore: ChannelsStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.currentChannel = this.channelStore.findById(
        this.id
      );

      this.loadMessages();
    });
    const tempUser = sessionStorage.getItem('currentUser');
    if (tempUser) {
      this.currentUser = JSON.parse(tempUser);
    }
  }

  loadMessages() {
    this.channelService
      .getChannelMessagesByChannelId(this.id)
      .subscribe((data) => {
        this.messages = [];
        for (let msg of data) {
          this.messages = [
            ...this.messages,
            this.convertMessageToViewMessage(msg),
          ];
        }
      });
  }

  deleteChannel(): void {
    this.channelService.deleteChannelById(this.id)
      .subscribe({
        next: value => {
          console.log(`Channel ${this.id} deleted !`);
          this.router.navigate(['']).then(() =>
            window.location.reload()
          );
        },
        error: err => console.log(err)
      })
  }

  showEditChannelForm() {
    this.isChannelNameEdit = true;
  }

  convertMessageToViewMessage(message: PublicMessage): ViewMessage {
    const creationDate = this.getDateFormatString(
      new Date(message.creationDate)
    );
    let updateDate = '';
    if (message.updateDate) {
      updateDate = this.getDateFormatString(new Date(message.updateDate));
    }

    return {
      id: message.id,
      content: message.content,
      sender: message.sender.username,
      creationDate: creationDate,
      updateDate: updateDate,
      icon:
        message.sender.firstName?.charAt(0)! +
        message.sender.lastName?.charAt(0)!,
      upvoters: message.upvoters.length,
      downvoters: message.downvoters.length,
    };
  }

  getDateFormatString(date: Date): string {
    let dateFormatString = '';
    if (date.getDate() == new Date().getDate()) {
      dateFormatString += "aujourd'hui";
    } else if (date.getDate() == new Date().getDate() - 1) {
      dateFormatString += 'hier';
    } else {
      dateFormatString += date.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
    }
    dateFormatString +=
      ' ' +
      date.toLocaleString('fr-FR', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });

    return dateFormatString;
  }
}
