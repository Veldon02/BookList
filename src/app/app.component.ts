import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _apiservice:ApiServiceService) { }

  title = 'book-list-app';
  books:any;

  ngOnInit(){
    this._apiservice.getBook()
    .subscribe((result:any) => {
      console.log(result.items);
      this.books = result.items;
    });
  }
}
