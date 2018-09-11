import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShoppingCart } from 'app/shared/models/shopping-cart';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})

export class OrderSummaryComponent {

  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor() { }
}
