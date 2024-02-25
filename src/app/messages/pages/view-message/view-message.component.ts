import {Component, Input, OnInit} from '@angular/core';
import {PublicMessage} from "../../../core/models/public-messages";
import {ViewMessage} from "../../../core/models/view-message";

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrl: './view-message.component.css'
})
export class ViewMessageComponent implements OnInit{
  @Input() message!: ViewMessage;

  ngOnInit(): void {
    console.log(this.message);
  }


  toggleUpvote() {

  }

  toggleDownvote() {

  }
}
