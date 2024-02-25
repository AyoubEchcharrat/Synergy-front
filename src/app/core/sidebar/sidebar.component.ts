import {Component, Input, OnInit} from '@angular/core';
import {User} from "../models/users";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  @Input() currentUser!: User;
  connected!: boolean;

  ngOnInit(): void {
    this.connected = this.currentUser != undefined;
  }
}
