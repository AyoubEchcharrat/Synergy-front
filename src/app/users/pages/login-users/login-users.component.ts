import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css'],
})
export class LoginUsersComponent {
  title = 'synergy';
  modalRef?: BsModalRef;
  loginForm!: FormGroup;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  login() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      this.usersService.authenticateUser(user).subscribe(
        (response) => {
          console.log(response);
          this.closeModal();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
