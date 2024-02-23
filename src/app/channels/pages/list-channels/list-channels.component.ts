import {Component, OnInit} from '@angular/core';
import { ChannelsService } from '../../services/channels.service';
import { Channel } from '../../../core/models/channels';

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrl: './list-channels.component.css',
})
export class ListChannelsComponent implements OnInit{
  channels!: Channel[];
  constructor(private channelService: ChannelsService) {}

  ngOnInit(): void {
    this.getAllChannels();
  }

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
