import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { IMovie } from '../imovie';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent  {  
  @Input() 
  movieId : number; 

  public show:boolean = false;

  // movie : any; 
  movie : any; 

  constructor(private _service: ApiService) {}

  ngOnInit(){
    this._service.getMovieById(this.movieId).subscribe(data => {this.movie = data})
  }

  closeDetail(){
    this.show=!this.show;
  }

  toggleMovieDetail(){
    this.show=!this.show;
  }
}