import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/books/book.service';
import {Location} from '@angular/common';
import { Book } from '../shared/models/book';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  id:any;
  book:Book | null = null;
  notFound:boolean = false;
  defaultImage:string = "assets/images/default.png";

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _bookService:BookService,
    private _location:Location,
    private _dialogRef:MatDialog)
    {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      console.log('params');
      console.log(params);
      console.log(params['id']);
      if (params['id'])
        this._bookService.getById(params['id'])
          .subscribe({
            next: (book: Book) => {this.book = book;},
            error: (error: any) => {this.notFound = true;}
          });
    });
  }

  openDetails($event:Event){
    $event.preventDefault();
    this._dialogRef.open(BookDetailsComponent, {data: {
      book : this.book}
    });
  }

  returnButtonClick(){
    this._location.back();
  }

}
