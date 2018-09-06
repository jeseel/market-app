import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  shoppingCart$;
  cart = [];
  constructor(private shoppingCartService: ShoppingCartService) { }


  async ngOnInit() {
    this.shoppingCart$ = await this.shoppingCartService.getCart();

    // (this.shoppingCart$)
    //   .subscribe(shoppingcart => {
    //     this.cart = [];
    //     shoppingcart.productIds.forEach(productId => {
    //       this.cart.push(
    //         {
    //           product: shoppingcart.items[productId].product,
    //           quantity: shoppingcart.items[productId].quantity ? shoppingcart.items[productId].quantity : 0
    //         });
    //     });
    //   });
  };



  ngOnDestroy() {

  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }
}