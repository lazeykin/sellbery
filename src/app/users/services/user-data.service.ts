import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { Users } from '../mock-users';

@Injectable()
export class UserDataService {
  constructor() {
    //
  }

  public getUsers(): Observable<User[]> {
    return of(Users);
  }

  public getUser(id: number): Observable<User> {
    const user = Users.find((item) => item.id === id);

    if (user) {
      return of(user);
    }

    return throwError('User not found');
  }

  public filterUser(searchKey: string): Observable<User[]> {
    searchKey = searchKey.trim().toLowerCase(); // convert to lower case for search
    const users = Users.map((obj) => ({ ...obj })); // copy source data

    users.forEach((obj) =>
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'string') {
          obj[key] = obj[key].toLowerCase();
        }
      })
    ); // convert to lower case for search

    const filteredUsers = users.filter((obj) =>
      Object.keys(obj).some((key) => {
        if (typeof obj[key] !== 'number' && key !== 'avatarUrl') {
          return obj[key].includes(searchKey);
        }
      })
    );

    const results = Users.filter((item) =>
      filteredUsers.find((elem) => elem.id === item.id)
    );

    return of(results);
  }
}
