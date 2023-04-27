import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/books/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/models/book';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  books:Book[] | null = null;
  defaultImage = "assets/images/default.png";
  // books:any;

  constructor(private _bookService:BookService, 
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      if (params['query']){
        this._bookService.search(params['query'])
        .subscribe(books => this.books = books);
      }
    });
    // this._activatedRoute.params.subscribe(params => {
    //   if (params['query'])
    //     this._bookService.search(params['query'])
    //     .subscribe((books:any) => this.books = books.items);
    // });

  }
}
