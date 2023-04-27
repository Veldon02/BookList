import { Component, Inject, Input } from '@angular/core';
import { Book } from '../shared/models/book';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  book:Book | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private dialogRef: MatDialogRef<BookDetailsComponent>) {
    this.book = data.book;
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
