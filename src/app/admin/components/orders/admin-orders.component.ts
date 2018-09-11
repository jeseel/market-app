import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.orders$ = this.orderService.getAll();
  }

  orderDetail(id) {
    this.router.navigate(['admin/order-details/', id]);
  }

}
