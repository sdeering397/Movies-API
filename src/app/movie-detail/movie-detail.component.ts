import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IMovie } from '../imovie';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent  {

  rating : number;
  genre : string;
  length : number;
  movie : any; 
  movie_id : number;
  movieId : number; 
  public show:boolean = true;

  constructor(private _service: ApiService) {}

  ngOnInit(){
    this.movie_id = this.movieId;
    this._service.getMovie(this.movie_id).subscribe(data => {this.movie = data})
  }

  closeDetail(){
    this.show=!this.show;
  }
}