import { Injectable } from '@angular/core';

import "rxjs/add/operator/map";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SEARCH, DETAIL, RECOMENDED } from './global';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public url: string;
  public url2: string;
  public url3: string;


  constructor(private http: HttpClient) {
    this.url = SEARCH.url;
    this.url2 = DETAIL.url;
    this.url3 = RECOMENDED.url;


  }


  //YOUTUBE
  youtubeView(word): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',


    });

    return this.http.get(this.url + "&q=" + word + "&maxResults=5");

  }

  //DETAIL
  detailView(id): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',


    });

    return this.http.get(this.url2 + "&id=" + id);

  }

  //RECOMENDED
  recomendedView(id): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',


    });

    return this.http.get(this.url3 + "&relatedToVideoId=" + id + "&maxResults=6");

  }


}