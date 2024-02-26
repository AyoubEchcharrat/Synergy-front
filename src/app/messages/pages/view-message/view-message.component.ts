import { Component, Input, OnInit } from '@angular/core';
import { ViewMessage } from '../../../core/models/view-message';
import { User } from '../../../core/models/users';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrl: './view-message.component.css',
})
export class ViewMessageComponent implements OnInit {
  @Input() message!: ViewMessage;
  //@Input() currentUser!: User;

  ngOnInit(): void {
    console.log(this.message);
  }

  toggleUpvote() {}

  toggleDownvote() {}

  toggleModif() {}
}
