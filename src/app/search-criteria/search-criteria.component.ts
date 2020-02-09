import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

<<<<<<< HEAD
  constructor() {}
=======
  constructor( private _service: ApiService ) {}
>>>>>>> 650ccbe6132a3b9019e8578bb9f50491fba87fd0

  ngOnInit() {
  }

  genreSearch(genreId : number){
    this._service.getGenreBySearch(genreId);
  }
}
