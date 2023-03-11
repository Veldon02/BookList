import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/books/book.service';
import { Book } from '../shared/models/Book';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  books:Book[] = [];

  constructor(private _bookService:BookService) { }

  ngOnInit(): void {
    this.books = this._bookService.getAll();
  }
}
