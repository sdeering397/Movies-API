import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { IMovie } from '../imovie';
// import { MovieListComponent} from './movie-list-component';
=======
>>>>>>> 650ccbe6132a3b9019e8578bb9f50491fba87fd0

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
<<<<<<< HEAD
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
=======
export class WatchlistPageComponent implements OnInit {
  @Input() 
  movieId : number; 
  movies = []; 
  watchList = [];
  show:boolean = false;
  movie : any; 
  

  constructor(private _service: ApiService, private route: ActivatedRoute) {
>>>>>>> 650ccbe6132a3b9019e8578bb9f50491fba87fd0

  }

  ngOnInit() {
<<<<<<< HEAD
  
=======
    this._service.getMovieById(this.movieId).subscribe(data => {this.movie = data})
>>>>>>> 650ccbe6132a3b9019e8578bb9f50491fba87fd0
  }

}
