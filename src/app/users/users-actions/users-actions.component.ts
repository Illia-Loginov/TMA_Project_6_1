import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-actions',
  templateUrl: './users-actions.component.html',
  styleUrls: ['./users-actions.component.scss']
})
export class UsersActionsComponent implements OnInit {
  @Output() selectAll = new EventEmitter<null>();
  @Output() delete = new EventEmitter<null>();
  @Output() sort = new EventEmitter<boolean>();
  @Output() search = new EventEmitter<string>();
  searchInput = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSelectAll() {
    this.selectAll.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  onSort(ascending: boolean) {
    this.sort.emit(ascending);
  }

  onSearch() {
    this.search.emit(this.searchInput);
  }

}
