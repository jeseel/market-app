import { AppUser } from '../models/app-user'
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  u$: Observable<AppUser>;

  constructor(private db: AngularFireDatabase) { }

  // save/update user to firebase - because the autentication is from third part likes Google
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  //get a user from firebase with parameter userId
  // get(uid: string): FirebaseObjectObservable<AppUser> {
  get(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }

}
