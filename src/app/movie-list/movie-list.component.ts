import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IMovie } from '../imovie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  // public rating : number;
  // public length : number;
  show:boolean = false;
  showWatchList:boolean= true;
  movie : any; 

  movieList = [];
  watchList = [];

  constructor(private _service: ApiService) {}

  ngOnInit() {
    this._service.getMovieList()
      .subscribe((data:any) => this.movieList = data.results);

  }

  hide(){
    this.show=!this.show;
    this.showWatchList=!this.showWatchList;
  }

  addMovie(movie){
    this.watchList.push(movie);
    console.log(this.watchList)
}

  }

