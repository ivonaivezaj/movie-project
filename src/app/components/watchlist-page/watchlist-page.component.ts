import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service'
@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {

  movie: Object;
  constructor(private _router: ActivatedRoute, 
              private _movieservice: MovieService) {


  }

  ngOnInit() {
    this._router.params.subscribe((params)=>{
      let id= params['id'];
      this._movieservice.getmovie(id).subscribe((movie)=>{
        console.log(movie);
        this.movie=movie;
        
      });
    });
  }

}
