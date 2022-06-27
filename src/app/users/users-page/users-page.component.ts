import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../User';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users: User[] = [];
  displayUsers: User[] = [];
  checked: number[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.users;
    this.displayUsers = this.users;
  }

  onSelectAll() {
    if(this.checked.length === this.displayUsers.length) {
      this.checked = [];
    } else {
      this.checked = this.displayUsers.map(user => user.id);
    }
  }

  onDelete() {
    this.users = this.usersService.delete(...this.checked);
    this.displayUsers = this.displayUsers.filter(user => !this.checked.includes(user.id));
    this.checked = [];
  }

  onSort(ascending: boolean) {
    this.displayUsers = this.displayUsers.sort((a, b) => {
      let nameA = `${a.firstname} ${a.lastname} ${a.id}`;
      let nameB = `${b.firstname} ${b.lastname} ${b.id}`;

      let sortFactor = 1;
      if(!ascending) sortFactor = -1;

      if(nameA < nameB) return -1 * sortFactor;
      else if(nameA > nameB) return 1 * sortFactor;
      else return 0 * sortFactor;
    })
  }

  onSearch(input: string) {
    this.displayUsers = this.users.filter(user => {
      let fullname = `${user.firstname} ${user.lastname}`;
      return fullname.includes(input);
    })
  }

  onCheck(id: number, checked: boolean) {
    if(checked) {
      this.checked.push(id);
    } else {
      this.checked = this.checked.filter(checkedId => checkedId !== id);
    }
  }

}
