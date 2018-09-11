import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from 'app/admin/components/orders/admin-orders.component';
import { ProductFormComponent } from 'app/admin/components/product-form/product-form.component';
import { AdminProductsComponent } from 'app/admin/components/products/admin-products.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { OrderDetailsComponent } from 'shared/components/order-datails/order-datails.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';



const appRoutes: Routes =
  [
    {
      path: 'admin/products/new',
      component: ProductFormComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
      path: 'admin/products/delete/:id',
      component: ProductFormComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
      path: 'admin/products/:id',
      component: ProductFormComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
      path: 'admin/products',
      component: AdminProductsComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
      path: 'admin/orders',
      component: AdminOrdersComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
      path: 'admin/order-details/:id',
      component: OrderDetailsComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    }   
  ]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(appRoutes)

  ],
  declarations: [
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent
  ],
  providers:[
    AdminAuthGuard
  ]
})
export class AdminModule { }
