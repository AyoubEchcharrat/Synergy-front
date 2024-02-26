import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrivateMessage } from '../../core/models/private-messages';
import { PublicMessage } from '../../core/models/public-messages';
import { ViewMessage } from '../../core/models/view-message';

@Injectable({
  providedIn: 'root',
})
export class ViewMessageService {
  url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getAllConversationMessages(
    idSender: number,
    idRecipient: number
  ): Observable<PrivateMessage[]> {
    return this.http.get<PrivateMessage[]>(
      `${this.url}/privatemessages/${idSender}/${idRecipient}`
    );
  }

  addPublicMessage(msg: any): Observable<PublicMessage> {
    return this.http.post<PublicMessage>(`${this.url}/publicmessages`, msg);
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
