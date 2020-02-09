import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../imovie';
// import { MovieListComponent} from './movie-list-component';

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements IMovie {
  
  public rating : number;
  public length : number;
  // @Input() 
  // movieId : number; 
  // movies = []; 
  // watchList = [];
  // show:boolean = false;
  // movie : any; 
  // public movieList : IMovie[] = [];
  // public watchList : IMovie[] = [];
  

  constructor(private _service: ApiService, private route: ActivatedRoute) {
    // this._service.getMovieList()
    //   .subscribe((data:any) => this.movieList = data.results);

  }

  ngOnInit() {
  
  }

}
