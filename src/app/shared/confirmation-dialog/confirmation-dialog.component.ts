import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      // console.log(data);
     }

}

// export class DataIformation {

//   message: string;
//   messageText: string;
//   title: string;
//   objectName: string;

//   constructor() {
//     this.message = this.messageText +" "+ this.objectName + "?";
//     this.title = ""
//   }

// }

