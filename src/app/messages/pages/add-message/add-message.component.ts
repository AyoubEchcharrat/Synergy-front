import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersStoreService } from '../../../users/services/users-store.service';
import { User } from '../../../core/models/users';
import { ChannelsStoreService } from '../../../channels/services/channels-store.service';
import { ActivatedRoute } from '@angular/router';
import { Channel } from '../../../core/models/channels';
import { ViewMessageService } from '../../services/view-message.service';
import { MessagesStoreService } from '../../services/messages-store.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css',
})
export class AddMessageComponent implements OnInit {
  content: FormControl = new FormControl('');
  currentUser!: User | null;
  currentChannel!: Channel | undefined;

  constructor(
    private usersStoreService: UsersStoreService,
    private channelsStoreService: ChannelsStoreService,
    private activatedRoute: ActivatedRoute,
    private messagesService: ViewMessageService,
    private messageStore: MessagesStoreService
  ) {}

  ngOnInit(): void {
    this.usersStoreService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
    this.currentChannel = this.channelsStoreService.findById(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    );
  }

  addMessage() {
    const newPMessage = {
      content: this.content.value,
      sender: this.currentUser,
      channel: this.currentChannel,
    };
    this.messagesService
      .addPublicMessage(newPMessage)
      .subscribe((publicmessage) => {
        console.log(publicmessage);
        let viewmessage =
          this.messagesService.convertMessageToViewMessage(publicmessage);
        console.log(viewmessage);
        this.messageStore.addMessage(viewmessage);
      });
  }
}
