import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import * as xml2js from 'xml-to-json-promise';

@Injectable()
export class EidrService {

  headers:Headers;

  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Authorization','Eidr 10.5238/webui:10.5237/D4C9-7E59:9kDMO4+lpsZGUIl8doWMdw==');
    this.headers.append('EIDR-Version','2.1');
    this.headers.append('Content-Type','text/xml;charset=UTF-8');
    
    
  }
  public Search(terms: Observable<string>):any {    
    return terms.debounceTime(400)
    .distinctUntilChanged()
    .switchMap(term => this.SearchString(term));        
  }


  public SearchString(searchString:string):any{
    let postString:string = 
    '<Request xmlns="http://www.eidr.org/schema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
    '<Operation>' +
      '<Query>' +
        '<Expression><![CDATA[ASCII(((/FullMetadata/BaseObjectData/ResourceName "' + searchString + '") OR (/FullMetadata/BaseObjectData/AlternateResourceName "' + searchString + '")))]]></Expression>' +
        '<PageNumber>1</PageNumber>' +
        '<PageSize>100</PageSize>' +
      '</Query>' +
    '</Operation>' +
  '</Request>';
    return this.http.post('https://resolve.eidr.org/EIDR/query/',postString,{headers:this.headers})
    .map((res:any) => {      
      return xml2js.xmlDataToJSON(res._body);
    });
  }

}
