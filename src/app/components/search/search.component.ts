import { Component, OnInit, DoCheck } from '@angular/core';
import { Youtube } from '../../models/search';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public youtube: Youtube;
  public dataLis = [];

  constructor(

    private _route: ActivatedRoute,
    private _router: Router,
    private _searchService: SearchService,

  ) {
    this.youtube = new Youtube('');

  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(this.dataLis);

  }


  onSubmit(youtubesearch) {

    this._searchService.youtubeView(youtubesearch).subscribe(
      response => {

        this.dataLis = response.items;


      },
      error => {
        console.log(<any>error);
      }
    );

  }
}