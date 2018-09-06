import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from 'app/models/app-user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  appUser: AppUser;
  
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser)
  }


  logIn() {
    this.auth.login();
  };

}
