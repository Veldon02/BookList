import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  query:String = "";

  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      if (params['query'])
        this.query = params['query'];
    })
  }

  search(){
    if (this.query && this.query.length > 0)
      this._router.navigate(["/search/", this.query]);
    else if(this.query.length == 0){
      this._router.navigate(["/"]);
    }
  }

}
