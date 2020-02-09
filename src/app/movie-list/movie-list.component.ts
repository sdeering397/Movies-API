import { Component, OnInit , Input} from '@angular/core';
import { ApiService } from '../api.service';
import { IMovie } from '../imovie';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  @Input() 
  show : boolean = false;
  showWatchList : boolean= true;
  movie : any; 
  movieId : number; 
  movieList = [];
  // watchList = []; 

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
    this._service.watchList.push(movie);
    console.log(this._service.watchList);
    return this._service.watchList
}

  }

