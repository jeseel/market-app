import { Component, OnInit, Inject, Input } from '@angular/core';
import { DialogOverviewComponent } from 'shared/dialogs/dialog-overview/dialog-overview.component';
import { Route, ActivatedRoute } from '@angular/router';
import { OrderService } from 'app/order.service';
import { Order } from 'shared/models/order';
import { Observable } from 'rxjs/Observable';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'order-datails',
  templateUrl: './order-datails.component.html',
  styleUrls: ['./order-datails.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    private dialog: MdDialog,
    private route: ActivatedRoute,
    private orderService: OrderService,

  ) { }

  param$
  order$: Observable<Order>

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    let orderId = this.route.snapshot.paramMap.get('id');
    this.order$ = this.orderService.get(orderId);

    this.order$.subscribe(orderResult => {

      console.log(orderResult);

      const dialofRef = this.dialog.open(DialogOverviewComponent,
        {
          width: '100%',

          data: {
            orders: orderResult,
            action: 'detail',
            message: []
          }
        }).afterClosed().subscribe(r => console.log(r));
    })
  };
}
