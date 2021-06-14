import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user/user.service';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';



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
  // @ts-ignore
  // @Input() messageEvent: any = false;
  checkSuccess: any = {
    messagedb: '',
    message: '',
    status: false
  };
  error1: any = {
    message : 'dbusername'
  };
  error2: any = {
    message: 'dbphone'
  };
  registerForm: FormGroup = new FormGroup({
      username: new FormControl(''),
      phone: new FormControl(''),
      pwGroup: this.fb.group({
        password: new FormControl(''),
        confirmPassword: new FormControl('')
    })
  });
  submitted = false;
  @Output() openModel = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.min(6), Validators.max(8)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
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
    this.checkSuccess = {
      messagedb: '',
      message: '',
      status: false
    };
    if (this.registerForm.valid) {

      const user: User = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.pwGroup.password,
        phone: this.registerForm.value.phone
      };
      this.userService.register(user).subscribe((data) => {
        this.submitted = false;
        this.registerForm.reset();
        this.checkSuccess.status = true;
        }, (data) => {
        console.log('data === ', data);
        console.log('json data ===', data.error);
        console.log('json data ===', this.error1.message);

        if (data.error === this.error1.message) {
          this.checkSuccess.messagedb = this.error1.message;
          this.checkSuccess.message = 'The username is existed! Please try again!';
        } else if (data.error === this.error2.message) {
          this.checkSuccess.messagedb = this.error2.message;
          this.checkSuccess.message = 'The phone is existed! Please try again!';
        } else {
          this.checkSuccess.message = 'Registration failed!';
        }
        console.log(this.checkSuccess);
      });
    }

  }
  opensweetalert() {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success',
    );
  }

}
