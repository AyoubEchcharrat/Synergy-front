import { Component, OnInit } from '@angular/core';
import { User } from './core/models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'synergy';
  currentUser!: User;

  ngOnInit(): void {
    const tempUser = sessionStorage.getItem('currentUser');
    if (tempUser) {
      this.currentUser = JSON.parse(tempUser);
    }
  }
}
