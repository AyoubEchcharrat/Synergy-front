import { Injectable } from '@angular/core';
import { Channel } from '../../core/models/channels';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelsStoreService {
  private readonly _channels: BehaviorSubject<Channel[]> = new BehaviorSubject<
    Channel[]
  >([]);
  readonly channel$: Observable<Channel[]> = this._channels.asObservable();

  get channels(): Channel[] {
    return this._channels.getValue();
  }
  set channels(val: Channel[]) {
    this._channels.next(val);
  }

  findById(id: number): Channel | undefined {
    return this.channels.find((e) => e.id === id);
  }

  addChannel(newChannel: Channel) {
    this.channels = [...this.channels, newChannel];
  }
  deleteChannelById(id: number) {
    this.channels = this.channels.filter((e) => e.id !== id);
  }
  updateChannel(updateC: Channel) {
    const currentChannels = [...this.channels];
    const index = currentChannels.findIndex((val) => val.id === updateC.id);
    currentChannels[index] = updateC;
    this.channels = currentChannels;
  }

  constructor() {}
}
