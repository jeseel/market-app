import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MdDialog, MdDialogRef } from '@angular/material';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { Route, ActivatedRoute } from '@angular/router';
import { OrderService } from 'app/order.service';
import { Order } from '../models/order';
import { Observable } from 'rxjs/Observable';

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

    // const dialofRef = this.dialog.open(DialogOverviewComponent, {
    //   width: '250px',
    //   data: {
    //     message:
    //       [{ title: 'Are you sure you want delete this product' }]
    //   }
    // })
  };


}
