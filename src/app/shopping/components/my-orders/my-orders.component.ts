import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'app/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  orders$: Observable<any>;
  orders;
  user;
  orderSubscription: Subscription;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.orders$ = await this.authService.user$
      .switchMap(u => this.orderService.getByUserId(u.uid))

    this.orderSubscription = this.orders$.subscribe(order => order);
  };

  async orderDetail(orderId) {
    this.router.navigate(['my/orders/order-details/', orderId])
  }

  ngOnDestroy() {
    this.orderSubscription.unsubscribe();
  }
}