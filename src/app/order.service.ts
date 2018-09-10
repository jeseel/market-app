import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { ShoppingCartService } from 'app/services/shopping-cart.service';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';
import { Subscription } from 'rxjs';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Order } from 'app/models/order';

@Injectable()

export class OrderService {

  userId: string;
  userSubscription: Subscription;

  constructor(
    private db: AngularFireDatabase,
    private firebaseApp: FirebaseApp,
    private shoppingCartService: ShoppingCartService
  ) { }

  async placeOrder(order) {
    //  let x = (await this.db.list('/orders').push(order));
    // this.shoppingCartService.clearCart();

    let result = (this.firebaseApp.database().ref('/orders').push());

    result.transaction(t => { return order }, (error, committed, snapshot) => {

      if (committed) {
        this.shoppingCartService.clearCart();
      }

      if (error) {
        alert(error);
        return error;
      }

      if (snapshot) {
        console.log('snapshop', snapshot)
        return snapshot
      }
    })

    return result;
  }

  getAll(): FirebaseListObservable<Order[]> {
    return this.db.list('/orders');
  }

  getByUserId(userId) {
    return this.db.list('/orders/', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    });
  }

  get(orderId) {
    return this.db.object('/orders/' + orderId);
  }

  // create(shipping) {
  //     return this.db.list('/shipping').push(shipping)
  // }

  // get(shippingId) {
  //     return this.db.object('/shipping/' + shippingId);
  // }

  // update(shippingId, shipping) {
  //     return this.db.object('/shipping/' + shippingId).update(shipping);
  // }

  // delete(shippingId) {
  //     return this.db.object('/shipping/' + shippingId).remove();
  // }
}
