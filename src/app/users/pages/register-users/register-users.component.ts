import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { UsersStoreService } from '../../services/users-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css'],
})
export class RegisterUsersComponent implements OnInit {
  formUser!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private usersStoreService: UsersStoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formUser = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  save() {
    const newUser = { ...this.formUser.value };
    console.log(newUser);
    this.usersService.addUser(newUser).subscribe((v) => {
      console.log(v);
      this.usersStoreService.addUser(newUser);
      this.router.navigate(['/users']);
    });
  }
}

