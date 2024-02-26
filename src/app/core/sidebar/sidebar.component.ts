import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UsersStoreService } from '../../users/services/users-store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
