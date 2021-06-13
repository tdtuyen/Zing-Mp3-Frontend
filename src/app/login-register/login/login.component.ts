import {Component, ElementRef, Input, ViewChild, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  @ViewChild('loginModal', null) loginModal: ElementRef;
  @Input() openModel;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.openModel) {
      this.loginModal.nativeElement.className = 'modal fade show';
    }
  }

  login() {
    this.authenticationService.login(this.loginForm.value).subscribe(user => {
      localStorage.setItem('ACCESS_TOKEN', user.token);
      this.router.navigateByUrl('/');
    });
  }

}
