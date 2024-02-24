import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { UsersStoreService } from '../../services/users-store.service';
import { User } from '../../../core/models/users';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css'],
})
export class LoginUsersComponent {
  title = 'synergy';
  modalRef?: BsModalRef;
  username: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  userFound: boolean = true;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private usersService: UsersService,
    private usersStoreService: UsersStoreService,
    private router: Router
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  login() {
    const user: User = {
      username: this.username.value,
      email: this.email.value,
    };
    this.usersService.authenticateUser(user).subscribe(
      (response) => {
        if (typeof sessionStorage !== 'undefined' && response) {
          sessionStorage.setItem('currentUser', JSON.stringify(response));
        } else {
          console.error(
            'sessionStorage is not available or response/response.username is undefined'
          );
        }
        this.userFound = true; // Marquer l'utilisateur comme trouvé
        this.closeModal();
        this.router.navigate(['']);
      },
      (error) => {
        console.error(error);
        this.userFound = false; // Marquer l'utilisateur comme non trouvé en cas d'erreur
      }
    );
  }
}