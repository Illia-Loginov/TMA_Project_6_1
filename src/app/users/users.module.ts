import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersService } from './users.service';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserCardComponent } from './user-card/user-card.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UsersActionsComponent } from './users-actions/users-actions.component';

@NgModule({
  declarations: [
    UsersPageComponent,
    UserCardComponent,
    UsersActionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [
    UsersPageComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
