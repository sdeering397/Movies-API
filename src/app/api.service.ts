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

  _url1='https://api.themoviedb.org/3/discover/movie?api_key=b9e5c9c00c0d2cb749516b3e2ecbfcc1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

  getMovieListByDate(){
    return this.http.get(this._url1);
  }

  _url2='https://api.themoviedb.org/3/genre/movie/list?api_key=b9e5c9c00c0d2cb749516b3e2ecbfcc1';

  getListOfGenres(){
    return this.http.get(this._url2);
  }

// baseUrl = this.id

//   _url3=`https://api.themoviedb.org/3/movie/${this.baseUrl}?api_key=b9e5c9c00c0d2cb749516b3e2ecbfcc1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

//   getMovieById(){
//     return this.http.get(this._url3);
//   }
}
