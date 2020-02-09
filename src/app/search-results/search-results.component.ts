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
  genreList = [];
  searchList = []; 

  constructor(private _service: ApiService) { }

  ngOnInit() {
    this._service.getMoviesByGenre(this.movieId).subscribe(data => {this.movie = data})

    this._service.getGenres()
      .subscribe((data:any) => this.searchList = data.genres);
  }

  populateResults(){
    return this.searchList
  }
}