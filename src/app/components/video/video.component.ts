import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';


@Component({
    selector: 'app-video',
    templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit{

    video:any = {};
    private recomend ={};
    constructor( private activatedRoute: ActivatedRoute,
                 private _searchService: SearchService
    ) {
    
        
    }
    
    ngOnInit() {
        this.activatedRoute.params.subscribe( params => {
            this.video = this._searchService.detailView( params['id'] ).subscribe(
                response=>{
                
                 this.video = response.items['0'];
                }, 
                error =>{
                  console.log(<any>error);
                }
            );

        });

        this.activatedRoute.params.subscribe( params => {
            this.recomend = this._searchService.recomendedView( params['id'] ).subscribe(
                response=>{
                
                 this.recomend = response.items;
                 console.log("yeah recomend: ", this.recomend);
                }, 
                error =>{
                  console.log(<any>error);
                }
            );

        });
    }

}