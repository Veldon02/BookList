import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private key = "AIzaSyCsFym-5dJ5d2sUM_xf7V4OJr7ghbf4Nps";
  private API = "https://www.googleapis.com/books/v1/volumes";

  constructor(private _httpClient: HttpClient) { }

  public search(query: string): Observable<Book[]> {
    return this._httpClient.get<{ items:Book[]}>(this.API, {
      params: {
        q: query,
        maxResults: 40,
        key: this.key,
      },
    }).pipe(map(books => books.items || []));
  }

  public getById(bookId: string): Observable<Book> {
    return this._httpClient.get<Book>(`${this.API}/${bookId}`);
  }

}


