import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { OrderDetailsComponent } from 'app/shared/components/order-datails/order-datails.component';
import { environment } from 'environments/environment';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from 'shared/shared.module';

import { AdminModule } from './admin/admin.module';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from 'shared/components/page-not-found/page-not-found.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';

const appRoutes: Routes =
  [
    { path: '', component: ProductsComponent, },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  exports: [SharedModule]
  ,
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    CustomFormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    )
  ],
  providers: [
    AdminAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
