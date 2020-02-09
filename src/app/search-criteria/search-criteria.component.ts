import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  @Input() 
  // movieId : number; 
  // genreId : number; 
  // show:boolean = false;
  // movie : any; 
 genreList = [];

  constructor( private _service: ApiService ) {}

  ngOnInit() {
    this._service.getGenres()
    .subscribe((data:any) => this.genreList = data.genres);
  }

  goToSearchResults(genreId){
    return this._service.getMovieByGenre(genreId);
 
  }

}
