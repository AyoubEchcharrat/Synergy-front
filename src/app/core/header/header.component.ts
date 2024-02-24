import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @Input() currentUser!: User;
  connected!: boolean;
  ngOnInit(): void {
    this.connected = this.currentUser != undefined;
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.connected = false;
  }
}
