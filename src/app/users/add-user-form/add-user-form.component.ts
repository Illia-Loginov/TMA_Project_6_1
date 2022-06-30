import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  form: FormGroup = {} as FormGroup;
  @Output() addUser = new EventEmitter<Omit<User, "id">>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: new FormControl("", [ Validators.required, Validators.minLength(3) ]),
      lastname: new FormControl("", [ Validators.required, Validators.minLength(3), Validators.maxLength(60) ]),
      email: new FormControl("", [ Validators.required, Validators.email ]),
      phone: new FormControl("", [ Validators.required, Validators.pattern('^[0-9]*$') ]),
    })
  }

  onSubmit() {
    this.addUser.emit(this.form.value);
    this.form.reset();
  }

}
