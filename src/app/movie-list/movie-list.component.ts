import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IMovie } from '../imovie';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements IMovie {

  public rating : number;
  public length : number;
  public show:boolean = false;
  public showWatchList:boolean= true;
  movie : any; 
<<<<<<< HEAD
  movieId : number;

  public movieList = [];
  public watchList = [];
=======

  public movieList : IMovie[] = [];
  public watchList : IMovie[] = [];
>>>>>>> 650ccbe6132a3b9019e8578bb9f50491fba87fd0

  constructor(private _service: ApiService) {}

  ngOnInit() {
    this._service.getMovieList()
      .subscribe((data:any) => this.movieList = data.results);
  }

<<<<<<< HEAD
    // this._service.getMovieById(this.movieId).subscribe(data => {this.movie = data})
  }

  hide(){
    this.show=!this.show;
    this.showWatchList=!this.showWatchList;
  }

  addMovie(movie){
    this.watchList.push(movie);
    console.log(this.watchList) 
=======
  hide(){
    this.show=!this.show;
    this.showWatchList=!this.showWatchList;
  }

  addMovie(movie){
    this.watchList.push(movie);
    console.log(this.watchList)
}
 
>>>>>>> 650ccbe6132a3b9019e8578bb9f50491fba87fd0

    // this._service.getMovieById(this.movieId).subscribe(
    //   (data: any) => {
    //     this.watchList.push(movie(data));
    //   })
  }
}
