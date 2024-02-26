import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../core/models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersStoreService {
  private readonly _users: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);
  readonly users$: Observable<User[]> = this._users.asObservable();
  private readonly _currentUser: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  readonly currentUser$: Observable<User | null> =
    this._currentUser.asObservable();

  get users(): User[] {
    return this._users.getValue();
  }

  set users(val: User[]) {
    this._users.next(val);
  }

  setUsers(val: User[]) {
    this._users.next(val);
  }

  setConnectedUser(val: User) {
    this._currentUser.next(val);
  }

  addUser(newUser: User) {
    this.users = [...this.users, newUser];
  }
  deleteUserById(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
  updateUser(updatedUser: User) {
    const currentUsers = [...this.users];
    const index = currentUsers.findIndex((user) => user.id === updatedUser.id);
    currentUsers[index] = updatedUser;
    this.users = currentUsers;
  }

  constructor() {}

  authenticateUser(currentUser: any) {
    this._currentUser.next(currentUser);
  }
}
