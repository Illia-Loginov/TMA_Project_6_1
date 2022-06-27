import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable()
export class UsersService {
  users: User[] = [];

  constructor() {
    this.users = [
      {
        id: 1,
        firstname: 'Lauren',
        lastname: 'Coles',
        email: 'LaurenColes@teleworm.us',
        phone: '079 7932 3858'
      },
      {
        id: 2,
        firstname: 'Michael',
        lastname: 'Griffin',
        email: 'MichaelGriffin@armyspy.com',
        phone: '077 8531 5363'
      },
      {
        id: 3,
        firstname: 'Bailey',
        lastname: 'Perkins',
        email: 'BaileyPerkins@teleworm.us',
        phone: '070 7377 7534'
      },
      {
        id: 4,
        firstname: 'Olivia',
        lastname: 'Ellis',
        email: 'OliviaEllis@rhyta.com',
        phone: '079 6855 4342'
      },
      {
        id: 5,
        firstname: 'Elise',
        lastname: 'Atkins',
        email: 'EliseAtkins@jourrapide.com',
        phone: '079 7039 4289'
      },
    ]
  }

  delete(...ids: number[]): User[] {
    this.users = this.users.filter(user => !ids.includes(user.id));

    return this.users;
  }
}
