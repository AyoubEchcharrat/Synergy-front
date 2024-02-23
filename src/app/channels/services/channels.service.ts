import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from '../../core/models/channels';
import {PublicMessage} from "../../core/models/public-messages";

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  url: string = 'http://localhost:8080/api/channels';
  constructor(private http: HttpClient) {}

  getAllChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.url);
  }

  addChannel(channel: Channel): Observable<any> {
    return this.http.post<any>(this.url, channel);
  }

  getChannelMessagesByChannelId(id: number): Observable<PublicMessage[]> {
    return this.http.get<PublicMessage[]>(`${this.url}/${id}`);
  }
}
