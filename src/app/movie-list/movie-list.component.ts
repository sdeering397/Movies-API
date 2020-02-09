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
  public genre : string;
  public length : number;
  public show:boolean = false;
  public showWatchList:boolean= true;
  movie : any; 

  public movieList : IMovie[] = [];
  public watchList : IMovie[] = [];

  constructor(private _service: ApiService) {}

  ngOnInit() {
    this._service.getMovieList()
      .subscribe((data:any) => this.movieList = data.results);
  }

  hide(){
    this.show=!this.show;
    this.showWatchList=!this.showWatchList;
  }

  addMovie(){
    this.watchList.push(this.movie)
  }
  

}
