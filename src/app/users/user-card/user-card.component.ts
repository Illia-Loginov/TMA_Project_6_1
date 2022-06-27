import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User | undefined;
  @Input() checked = false;
  @Output() check = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onCheck() {
    this.check.emit(this.checked);
  }

}
