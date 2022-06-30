import { Injectable } from '@angular/core';
import { User, ApiUser } from './User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';

@Injectable()
export class UsersService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  users: User[] = [];

  constructor(private http: HttpClient) {}

  get(): Observable<User[]> {
    return this.http.get<ApiUser[]>(`${this.baseUrl}/users`)
      .pipe(map(users => users.map(user => {
        const [ firstname, lastname ] = user.name.split(' ');
        return {
          id: user.id,
          firstname,
          lastname,
          email: user.email,
          phone: user.phone
        }
      })));
  }

  add(user: Omit<User, 'id'>): Observable<User> {
    let reqUser: Omit<ApiUser, 'id'> = {
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
      phone: user.phone
    }

    return this.http.post<ApiUser>(`${this.baseUrl}/users`, reqUser)
      .pipe(map(resUser => {
        const [ firstname, lastname ] = resUser.name.split(' ');
        return {
          id: resUser.id,
          firstname,
          lastname,
          email: resUser.email,
          phone: resUser.phone
        }
      }))
  }

  delete(...ids: number[]): Observable<{}[]> {
    return forkJoin(ids.map(id => this.http.delete<{}>(`${this.baseUrl}/users/${id}`)))
  }
}
