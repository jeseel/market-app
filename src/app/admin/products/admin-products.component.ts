import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { Subscription } from 'rxjs/Subscription';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})


export class AdminProductsComponent implements OnDestroy {

  subscription: Subscription;
  products: Product[];
  product: Product;
  filteredProducts: any[];

  columns = [
    { prop: 'title', name: 'Title' },
    { prop: 'price', name: 'Price' }
  ];
  allColumns = [
    { prop: 'title', name: 'Title' },
    { prop: 'price', name: 'Price' },
  ];

  checkboxColumns = this.allColumns;

  constructor(
    private productService: ProductService,
    private router: Router,
    private dialog: MdDialog,

  ) {
    this.subscription = this.productService.getAll()
      .subscribe(prods => this.filteredProducts = this.products = prods);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  edit(product) {
    if (product.$key)
      this.router.navigate(['/admin/products/', product.$key])
  }

  delete(product) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {
        message: [{ title: 'Are you sure you want delete this product' }, { objectName: product.title }],
        title: "Delete Product"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (product.$key) this.productService.delete(product.$key);
      }
    })
  }

  toggle(col, $event) {

    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns = this.columns.filter(c => { return c.name !== col.name })
    } else {
      this.columns = [...this.columns, col];
    }
  }

  isChecked(col) {
    return this.columns.find(c => { return c.name === col.name });
  }

  filter(query: string) {

    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;

  }

}
