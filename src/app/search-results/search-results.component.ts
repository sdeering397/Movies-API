import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() 
  movieId : number; 
  genreId : number; 
  show : boolean = false;
  movie : any; 


  constructor(public _service: ApiService) { }

    ngOnInit() {
  }

  addMovie(movie){
    this._service.watchList.push(movie);
    console.log(this._service.watchList);
    return this._service.watchList
}

}
