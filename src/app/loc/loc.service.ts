import { Injectable } from '@angular/core';
import {Http, Headers,Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class LocService {
  headers:Headers;

  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');
    
    
  }
  public Search(terms: Observable<string>):any {    
    return terms.debounceTime(400)
    .distinctUntilChanged()
    .switchMap(term => this.SearchString(term));        
  }


  public SearchString(searchString:string):any{

    return this.http.get('http://americanarchive.org/api.json?q='+ searchString + '&fl=id,title&rows=100&start=1',{headers:this.headers})
    .map((res:any) => {
      return JSON.parse(res._body);
    });
  }

}
