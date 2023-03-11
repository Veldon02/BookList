import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiKey = "AIzaSyCsFym-5dJ5d2sUM_xf7V4OJr7ghbf4Nps";

  constructor(private _http:HttpClient) { }

  getBook(){
    return this._http.get("https://www.googleapis.com/books/v1/volumes?q=flowersforalgernon+inauthor:keyes&key="+this.apiKey);
  }
}
