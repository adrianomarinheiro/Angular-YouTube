import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { NgxSpinnerService } from "ngx-spinner";
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-video',
    templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit {

    faChevronCircleLeft =faChevronCircleLeft;
    video: any = {};
    public recomend = {};
    constructor(private activatedRoute: ActivatedRoute,
        private _searchService: SearchService,
        private spinner: NgxSpinnerService
    ) {


    }

    ngOnInit() {
        /** spinner starts on init */
        this.spinner.show();

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 2000);

        this.activatedRoute.params.subscribe(params => {
            this.video = this._searchService.detailView(params['id']).subscribe(
                response => {

                    this.video = response.items['0'];
                },
                error => {
                    console.log(<any>error);
                }
            );

        });

        this.activatedRoute.params.subscribe(params => {
            this.recomend = this._searchService.recomendedView(params['id']).subscribe(
                response => {

                    this.recomend = response.items;
                    console.log("yeah recomend: ", this.recomend);
                },
                error => {
                    console.log(<any>error);
                }
            );

        });
    }

}