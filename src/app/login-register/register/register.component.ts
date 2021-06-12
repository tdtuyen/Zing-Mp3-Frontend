import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordNotMatch: true
  };
}

function checkDob(control: AbstractControl) {
  const from = control.get('dob');
  const d = new Date();
  return (new Date(from.value) < d) ? null : {
    invalidDob: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required, Validators.min(6), Validators.max(8)]],
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validator: comparePassword})
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      alert('register success!');
      this.submitted = false;
    }
  }
}
