import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {
<<<<<<< HEAD
=======
  @Input() 

  
  movieId : number; 
  movies = []; 
  watchList = [];
  show:boolean = false;
  movie : any; 
>>>>>>> kevins-branch
  

  constructor(private _service: ApiService, private route: ActivatedRoute) {
  }


  ngOnInit() {
<<<<<<< HEAD
=======
    this._service.getMovieById(this.movieId).subscribe(data => {this.movie = data})


  }

  remove(i){
    this._service.watchList.splice(i,1);
    
>>>>>>> kevins-branch
  }

}
