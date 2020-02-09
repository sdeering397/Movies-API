import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../api.service';
import { IMovie } from '../imovie';
import { Router } from '@angular/router';

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
  text: string = 'More';

  constructor(private _service: ApiService, private router: Router) {}

  ngOnInit(){
    this._service.getMovieById(this.movieId).subscribe(data => {this.movie = data})

    this._service.getGenres()
      .subscribe((data:any) => this.genreList = data.genres);
  }
    
  toggleMovieDetail(){
    this.show=!this.show;
    if (this.text === 'More'){
      this.text = 'Less'
    }
    else if (this.text === 'Less'){
      this.text = 'More'
    }
  }

}