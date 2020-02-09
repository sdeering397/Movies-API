import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  constructor( private _service: ApiService ) {}

  ngOnInit() {
  }

  genreSearch(genreId : number){
    this._service.getGenreBySearch(genreId);
  }
}
