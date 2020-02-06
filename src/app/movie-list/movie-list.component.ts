import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IMovie } from '../imovie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements IMovie {

  public rating : number;
  public genre : string;
  public length : number;

  public movieList : IMovie[] = [];

  constructor(private _service: ApiService) {}

  ngOnInit() {
    this._service.getMovieList()
      .subscribe((data:any) => this.movieList = data.results);

  }


}
