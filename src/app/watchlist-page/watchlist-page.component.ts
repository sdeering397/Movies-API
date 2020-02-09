import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {
  @Input() 
  movieId : number; 
  movies = []; 
  watchList = [];
  show:boolean = false;
  movie : any; 
  

  constructor(private _service: ApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this._service.getMovieById(this.movieId).subscribe(data => {this.movie = data})
  }

}
