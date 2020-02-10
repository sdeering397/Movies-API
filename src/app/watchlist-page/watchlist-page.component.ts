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
  
  
  constructor(private _service: ApiService, private route: ActivatedRoute) {
  }
  
  
  ngOnInit() {
    
  }
  
  remove(i){
    this._service.watchList.splice(i,1);
    
  }
  
}
