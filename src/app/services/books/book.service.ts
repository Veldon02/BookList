import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books:Book[] = [
    {id:1, title:"Book 1", author:"Some Guy", imageUrl:"/assets/images/default.png", description:"Description 1", rating:2.5},
    {id:2, title:"Book 2", author:"Some Guy", imageUrl:"/assets/images/default.png", description:"Description 2", rating:3.5},
    {id:3, title:"Book 3", author:"Some Guy", imageUrl:"/assets/images/default.png",  description:"Description 3", rating:4.5},
    {id:4, title:"Book 4", author:"Some Guy", imageUrl:"/assets/images/default.png", description:"Description 4", rating:4.7},
    {id:5, title:"Book 5", author:"Some Guy", imageUrl:"/assets/images/default.png", description:"Description 5", rating:5},
    {id:6, title:"Book 6", author:"Some Guy", imageUrl:"/assets/images/default.png", description:"Description 6", rating:4.5},
  ]

  constructor() { }

  getAll():Book[] {
    return this.books;
  }
}

