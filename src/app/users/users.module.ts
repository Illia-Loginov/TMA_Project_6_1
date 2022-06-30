import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersService } from './users.service';

import { UsersPageComponent } from './users-page/users-page.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersActionsComponent } from './users-actions/users-actions.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UsersPageComponent,
    UserCardComponent,
    UsersActionsComponent,
    AddUserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  exports: [
    UsersPageComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
