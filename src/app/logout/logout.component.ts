import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
Form: FormControl;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }

}
