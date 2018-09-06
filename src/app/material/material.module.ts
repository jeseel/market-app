import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule,
  MatTableModule,
  MatDialogModule,
  MatCheckboxModule,
  MatListModule,
  MatChipsModule 
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule    
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule ,
    MatListModule,
    MatChipsModule
  ]

})
export class MaterialModule { }
