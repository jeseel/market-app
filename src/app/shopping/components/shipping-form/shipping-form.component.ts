import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from '../../../order.service';
import { Order } from 'app/shared/models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})

export class ShippingFormComponent implements OnInit, OnDestroy{
  @Input('shopping-cart') cart: ShoppingCart;

  shipping = { name: 'Test2', address1: 'address 1', address2: 'address 2', city: 'Montreal' };
  userId: string;
  userSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) { }
    
    
  ngOnInit(){
    this.userSubscription = this.authService.user$
      .subscribe(user => this.userId = user.uid)
  }

  async placeOrder() {

    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key])
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();    
  }
  
}
