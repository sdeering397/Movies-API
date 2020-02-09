import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  watchList =[];
  movieList = []; 

  constructor(private http : HttpClient) {}

  baseUrl : any ="https://api.themoviedb.org/3"
  apiKey : any = "b9e5c9c00c0d2cb749516b3e2ecbfcc1"; 

  _url=`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  genre_url=`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`;

  getMovieList(){
    return this.http.get(this._url);
  }

  // accesses the genre id url, which tells you which id # corresponds to which genre
  getGenres(){
    return this.http.get(this.genre_url);
  }

  getMoviesByGenre(genreId : number){
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
  }

  getMovieById(movieId : number){
    return this.http.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US&append_to_response=title,overview,runtime,revenue`);
  }
}
