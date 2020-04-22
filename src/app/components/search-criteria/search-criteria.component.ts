import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  popularLists:Array<Object>;
  searchRes:Array<Object>;
  theatersLists:Array<Object>;
  constructor(private _movieservice: MovieService) {

    this._movieservice.searchRes.subscribe((data: any) => {
      this.searchRes = data.results;
      console.log('hey',this.searchRes);
      
    }
    );
    this._movieservice.getPopular().subscribe(res=>{
      console.log(res.results);
      this.popularLists =res.results;
      
    });
    this._movieservice.getinTheatres().subscribe(res=>{
      //console.log(res.results);
      this.theatersLists = res.results;
    });

   }

  ngOnInit() {

  }

}
