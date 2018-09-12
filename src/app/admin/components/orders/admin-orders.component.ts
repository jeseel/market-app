import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../order.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'shared/models/order';
import { MdDialog } from '@angular/material';
import { DialogOverviewComponent } from 'shared/dialogs/dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$;

  constructor(
    private dialog: MdDialog,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.orders$ = this.orderService.getAll();
  }

  orderDetail(id) {
    // this.router.navigate(['admin/order-details/', id]);

    // let orderId = this.route.snapshot.paramMap.get('id');
    this.orderService.get(id).subscribe(orderResult => {

      console.log(orderResult);

      const dialofRef = this.dialog.open(DialogOverviewComponent,
        {
          width: '100%',
          data: {
            orders: orderResult,
            test: 'test',
            action: 'detail',
            message:
              [{ title: 'Are you sure you want delete this product' }]
          }
        }).afterClosed().subscribe(ee => console.log(ee));

    })

  };


}
