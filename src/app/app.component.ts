import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthService, private router: Router) {
    auth.user$.subscribe(user => {

      if (user) {
        let returnURL = localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnURL);
      } 
      // else {
      //   this.router.navigateByUrl('/');
      // }

    });
  }
}
