import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Firebase Settings
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AUTH_PROVIDERS } from 'angularfire2/auth';
import { CustomFormsModule } from 'ng2-validation';

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
import { AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ConfirmationDialogComponent } from 'app/shared/confirmation-dialog/confirmation-dialog.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';


const appRoutes: Routes =
  [
    {
      path: '',
      component: ProductsComponent,
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
    MyOrdersComponent,
    ProductFormComponent,
    ConfirmationDialogComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  entryComponents:[
    ConfirmationDialogComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot(
      appRoutes,
      
      // { enableTracing: true }
    )
  ],
  providers: [

    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
