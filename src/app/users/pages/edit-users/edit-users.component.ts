import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {UsersStoreService} from "../../services/users-store.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.css'
})
export class EditUsersComponent implements OnInit {
  id!: number;
  formUser!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private usersService: UsersService,
    private usersStoreService: UsersStoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.usersService.getUserById(this.id).subscribe(user => {
      this.formUser  = this.fb.group({
        username: ['', [Validators.required, Validators.maxLength(50)]],
        firstName: ['', [Validators.required, Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.maxLength(100)]],
      })
    })
  }

  save() {
    const editUser = { ...this.formUser.value };
    this.usersService.updateUser(editUser).subscribe((v) => {
      this.usersStoreService.updateUser(editUser);
      this.router.navigate(['/users']);
    });
  }

}
