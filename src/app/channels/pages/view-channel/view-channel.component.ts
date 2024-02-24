import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelsService } from '../../services/channels.service';
import { ViewMessage } from '../../../core/models/view-message';
import { MessagesStoreService } from '../../../messages/services/messages-store.service';

@Component({
  selector: 'app-view-channel',
  templateUrl: './view-channel.component.html',
  styleUrl: './view-channel.component.css',
})
export class ViewChannelComponent implements OnInit {
  id!: number;
  messages!: ViewMessage[];
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
        .subscribe((data) => {});
    }
  }
}
