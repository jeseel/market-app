import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  categories;
  products: Product[] = [];
  productsFiltered: Product[] = [];
  category: string;

  constructor(
    private productService: ProductService,
    router: ActivatedRoute
  ) {

    //  All Products
    this.productService
      .getAll()
      .switchMap((prods: Product[]) => {
        this.products = prods;
        return router.queryParamMap
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
