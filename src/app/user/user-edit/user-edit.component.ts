import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  status = '';
  editForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    avatar: new FormControl(''),
  });
  submitted = false;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.getUser();
  }

  getUser() {
    return this.userService.getCurrentUser().subscribe(user => {
      this.editForm = this.fb.group({
        username: [user.username, [Validators.required, Validators.min(6), Validators.max(8)]],
        address: [user.address, [Validators.required]],
        email: [user.email, [Validators.required, Validators.email]],
        phone: [user.phone, [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
        avatar: [user.avatar]
      });
    }, error => {console.log(error); });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      const user = this.editForm.value;
      console.log(user);
      this.userService.saveUser(user).subscribe(() => {
        this.submitted = true;
      }, e => {
        console.log(e);
      });
    }
  }
}
