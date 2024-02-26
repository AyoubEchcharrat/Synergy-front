import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/users';
import { Router } from '@angular/router';
import { UsersStoreService } from '../../users/services/users-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  currentUser!: User | null;

  constructor(
    private router: Router,
    private usersStoreService: UsersStoreService
  ) {}
  ngOnInit(): void {
    this.usersStoreService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      console.log('subscribe user ', this.currentUser);
    });
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.usersStoreService.authenticateUser(null);
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
}
