import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  status = '';
  checkSuccess: any = {
    messagedb: '',
    message: '',
  };
  error1: any = {
    message: 'dbusername'
  };
  error2: any = {
    message: 'dbphone'
  };
  editForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    avatar: new FormControl(''),
  });
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      username: ['', [Validators.required, Validators.min(6), Validators.max(8)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
      avatar: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.checkSuccess = {
      messagedb: '',
      message: '',
    };
    if (this.editForm.valid) {

      const user: any = {
        username: this.editForm.value.username,
        address: this.editForm.value.address,
        email: this.editForm.value.email,
        phone: this.editForm.value.phone,
        avatar: this.editForm.value.avatar
      };
    }
  }
}
