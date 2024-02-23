import { Component } from '@angular/core';
import { ChannelsService } from '../../services/channels.service';
import { Channel } from '../../../core/models/channels';

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrl: './list-channels.component.css',
})
export class ListChannelsComponent {
  channels!: Channel[];
  constructor(private channelService: ChannelsService) {}

  getAllChannels(): void {
    this.channelService.getAllChannels().subscribe({
      next: (value) => {
        this.channels = value;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  reloadContent() {}
}
