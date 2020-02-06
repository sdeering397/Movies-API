import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {}

  _url='https://api.themoviedb.org/3/discover/movie?api_key=b9e5c9c00c0d2cb749516b3e2ecbfcc1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

  getMovieList(){
    return this.http.get(this._url);
  }

  getMovie(movieId : number){
    return this.http.get(`${this._url}/${movieId}`);
  }
}
