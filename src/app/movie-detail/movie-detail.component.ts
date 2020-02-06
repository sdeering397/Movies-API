import { Component, OnInit } from '@angular/core';
import { IMovie } from '../imovie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements IMovie {

  rating : number;
  genre : string;
  length : number;

  constructor() { }

  ngOnInit() {
  }

}
