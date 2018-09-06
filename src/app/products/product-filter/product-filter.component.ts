import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {

  categories;
  @Input('category') category: string;

  constructor(private categoryService: CategoryService) {
    //  All Categories
    this.categoryService.getAll().subscribe(cats => {
      this.categories = cats
    });
  }

}
