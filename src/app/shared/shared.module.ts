import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from 'app/material/material.module';
import { ProductCardComponent } from 'shared/components/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { UserService } from 'shared/services/user.service';

import { OrderService } from '../order.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ConfirmationDialogComponent } from 'shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { DialogOverviewComponent } from 'shared/dialogs/dialog-overview/dialog-overview.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
     ConfirmationDialogComponent,
    DialogOverviewComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    FormsModule,
    ProductCardComponent,
    ProductQuantityComponent,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
  ],
  entryComponents: [
     ConfirmationDialogComponent,
     DialogOverviewComponent
  ],
})
export class SharedModule {

 }
