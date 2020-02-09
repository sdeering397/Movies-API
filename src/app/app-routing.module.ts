import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const appRoutes: Routes = [
  {path: 'watchlist-page', component: WatchlistPageComponent},
  {path: 'search-criteria', component: SearchCriteriaComponent},
  {path: '**', component: MovieListComponent}

  ];
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {}