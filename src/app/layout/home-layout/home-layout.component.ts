import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {LoginComponent} from '../../login-register/login/login.component';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  // status: false;
  // modalRef: BsModalRef;
  // messageEvent2($event) {
  //   this.status = $event;
  // }
  // private modalService: BsModalService
  // openModel: boolean;
  constructor() { }

  ngOnInit() {
    // if (this.status) {
    //   this.modalRef = this.modalService.show(LoginComponent);
    // }
  }

}
