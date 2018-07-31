import { Component, ViewChild } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  constructor(public auth: AuthService) { }

  logOut() {
    this.auth.logout();
  }

}
