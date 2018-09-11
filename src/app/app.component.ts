import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'shared/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService,
  ) {

    this.auth.user$.subscribe(user => {

      if (user) {
        this.userService.save(user);
        let returnURL = localStorage.getItem('returnUrl');
        if (returnURL) {
          localStorage.removeItem('returnUrl');
          this.router.navigateByUrl(returnURL);
        }
      }
      // else {
      //   this.router.navigateByUrl('/');
      // }

    });
  }

}
