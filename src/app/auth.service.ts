import { UserService } from './user.service';
import { AppUser } from 'app/models/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import { Injectable, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'; 
import * as firebase from 'firebase'


@Injectable()
export class AuthService{

  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute, 
    private userService: UserService ) {
    this.user$ = afAuth.authState
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    // create a localStorage to get the url after login and redirect to it.
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$() : Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) return this.userService.get(user.uid);
        return Observable.of(null);
      });    
  }

}
