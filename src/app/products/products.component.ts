import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/models/product';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from 'app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categories;
  products: Product[] = [];
  productsFiltered: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.cart$ = (await this.shoppingCartService.getCart())
    this.populationProduct()
  }

  private populationProduct() {
    //  All Products
    this.productService
      .getAll()
      .switchMap((prods: Product[]) => {
        this.products = prods;
        return this.route.queryParamMap
      })
      .subscribe((params: any) => {
        //  get category on url 
        this.category = params.get('category');
        // product Filtered
        this.productsFiltered = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });
  }

}
