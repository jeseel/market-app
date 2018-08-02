import { Component, ViewChild, OnDestroy } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser)
  }

  logOut() {
    this.auth.logout();
  }

  ngOnDestroy() {
    console.log('OnDestroy!!!!');
  }

}
