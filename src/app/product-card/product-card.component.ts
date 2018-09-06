import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/models/product';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {


  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCard() {
    this.shoppingCartService.addToCart(this.product);
  }

  // addToCard(product: Product) {

  //   this.shoppingCartService.set(product);

  //   console.log(this.shoppingCartService.getAll());
  //   // debugger;
  //   // product.key = product.$key;
  //   // let shoopingCart = [] // item in shooping Cart
  //   // let shoopingCartLocalStorage = localStorage.getItem('ShoopingCart'); // Item in shooping Cart from Local Storange

  //   // Add new product in Shooping Cart 
  //   // Convert it to string
  //   // And add it in Local Storage
  //   // if (shoopingCartLocalStorage == null) {
  //   //   shoopingCart.push(product)
  //   //   localStorage.setItem('ShoopingCart', JSON.stringify(shoopingCart));
  //   //   return;
  //   // }

  //   // Convert shoopingCartLocalStorage to JSON Object
  //   // shoopingCart = JSON.parse(shoopingCartLocalStorage);

  //   // // Compare if product does not match in ShoopingCart
  //   // // Add new product in Local Storage
  //   // if (!(shoopingCart.find(prod => product.$key === prod.key))) {
  //   //   shoopingCart.push(product)
  //   //   localStorage.setItem('ShoopingCart', JSON.stringify(shoopingCart));
  //   //   return;
  //   // }

  // }

}