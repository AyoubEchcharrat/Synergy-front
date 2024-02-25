import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ChannelsService } from '../../services/channels.service';
import { Channel } from '../../../core/models/channels';
import { Subscription } from 'rxjs';
import { ChannelsStoreService } from '../../services/channels-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrl: './list-channels.component.css',
})
export class ListChannelsComponent implements OnInit, OnDestroy {
  channels!: Channel[];
  hover!: boolean;
  private channelsSubscription!: Subscription;

  constructor(
    private channelService: ChannelsService,
    private channelStore: ChannelsStoreService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllChannels();
  }

  getAllChannels(): void {
    this.channelsSubscription = this.channelService.getAllChannels().subscribe({
      next: (value) => {
        this.channelStore.channels = value;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.channelStore.channel$.subscribe(
      (channels) => (this.channels = channels)
    );
  }

  addStyleHover(event: any) {
    event.target.classList.add('hover');
  }
  removeStyleHover(event: any) {
    event.target.classList.remove('hover');
  }
  ngOnDestroy(): void {
    this.channelsSubscription.unsubscribe();
  }
}
