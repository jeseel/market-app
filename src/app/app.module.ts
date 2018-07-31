import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';

// Firebase Settings
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AUTH_PROVIDERS } from 'angularfire2/auth';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './admin/orders/admin-orders.component';
import { MyOrdersComponent } from './my/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/products/admin-products.component';
import { environment } from 'environments/environment';

//Services
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';

const appRoutes: Routes =
  [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'products',
      component: ProductsComponent
    },
    {
      path: 'shooping-cart',
      component: ShoopingCartComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    
    {
      path: 'check-out',
      component: CheckOutComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'order-success',
      component: OrderSuccessComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'my/orders',
      component: MyOrdersComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'admin/products',
      component: AdminProductsComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'admin/orders',
      component: AdminOrdersComponent,
      canActivate: [AuthGuard]
    },
    { path: '***', component: PageNotFoundComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShoopingCartComponent,
    PageNotFoundComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    )
  ],
  providers: [

    AuthService, 
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
