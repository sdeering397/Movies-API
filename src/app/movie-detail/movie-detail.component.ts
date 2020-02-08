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
  genreId : number; 
  show:boolean = false;
  movie : any; 
  genreList = [];

  constructor(private _service: ApiService) {}

  ngOnInit(){
    this._service.getMovieById(this.movieId).subscribe(data => {this.movie = data})

    this._service.getGenres()
      .subscribe((data:any) => this.genreList = data.genres);
  }
    
  toggleMovieDetail(){
    this.show=!this.show;
  }
}