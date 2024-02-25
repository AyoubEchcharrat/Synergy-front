import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ViewMessage } from '../../core/models/view-message';

@Injectable({
  providedIn: 'root',
})
export class MessagesStoreService {
  readonly _messages: BehaviorSubject<ViewMessage[]> =
    new BehaviorSubject<ViewMessage[]>([]);
  readonly messages$: Observable<ViewMessage[]> = this._messages.asObservable();

  get messages(): ViewMessage[] {
    return this._messages.getValue();
  }
  set messages(val: ViewMessage[]) {
    this._messages.next(val);
  }
  addMessage(newMessage: ViewMessage) {
    this.messages = [...this.messages, newMessage];
  }
  deleteMessageById(id: number) {
    this.messages = this.messages.filter((e) => e.id !== id);
  }
  updateMessage(updateM: ViewMessage) {
    const currentMessages = [...this.messages];
    const index = currentMessages.findIndex((val) => val.id === updateM.id);
    currentMessages[index] = updateM;
    this.messages = currentMessages;
  }

  constructor() {}
}
