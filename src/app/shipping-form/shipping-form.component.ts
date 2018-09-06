import { Component, OnInit } from '@angular/core';
import { ShippingService } from 'app/services/shipping.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {

  shipping = {};

  constructor(private shippingService : ShippingService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    // let shoppingcart = await this.shoppingCartService.getAll();
  }

  save() {

    let order = {
      dataPlaced: new Date().getTime(),
      shipping: this.shipping
    }
    // console.log(order)
    this.shippingService.create(order);
  }

}
