import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsService } from '../../services/channels.service';
import { ViewMessage } from '../../../core/models/view-message';
import { PublicMessage } from '../../../core/models/public-messages';
import { User } from '../../../core/models/users';
import { ChannelsStoreService } from '../../services/channels-store.service';
import { Channel } from '../../../core/models/channels';
import { ViewMessageService } from '../../../messages/services/view-message.service';

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
    private router: Router,
    private messagesService: ViewMessageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.currentChannel = this.channelStore.findById(this.id);

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
            this.messagesService.convertMessageToViewMessage(msg),
          ];
        }
      });
  }

  deleteChannel(): void {
    this.channelService.deleteChannelById(this.id).subscribe({
      next: (value) => {
        console.log(`Channel ${this.id} deleted !`);
        this.router.navigate(['']).then(() => window.location.reload());
      },
      error: (err) => console.log(err),
    });
  }

  showEditChannelForm() {
    this.isChannelNameEdit = true;
  }
}
