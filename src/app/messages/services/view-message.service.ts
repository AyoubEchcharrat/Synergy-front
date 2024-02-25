import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PrivateMessage} from "../../core/models/private-messages";


@Injectable({
  providedIn: 'root'
})
export class ViewMessageService {
  url: string = 'http://localhost:8080/api/privatemessages';
  constructor(private http: HttpClient) { }

  getAllConversationMessages(idSender: number, idRecipient: number): Observable<PrivateMessage[]> {
    return this.http.get<PrivateMessage[]>(`${this.url}/${idSender}/${idRecipient}`);
  }
}
