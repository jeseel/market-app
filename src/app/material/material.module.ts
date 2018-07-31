import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
    
  ]

})
export class MaterialModule { }
