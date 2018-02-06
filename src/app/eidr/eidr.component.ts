import { Component, OnInit,Input } from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {EidrService} from './eidr.service';

import {eidr} from './eidr';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-eidr',
  templateUrl: './eidr.component.html',
  styleUrls: ['./eidr.component.css'],
  providers:[]
})
export class EidrComponent implements OnInit {

  data:eidr[];
  cols:any[];
  // @Input() searchTerm$ = new Subject<string>();

  constructor(private eidrService:EidrService,private globalService:GlobalService) { }


  ngOnInit() {
    this.globalService.selectedPage = "Entertainment Identifier Registry";

    this.globalService.searchTerm$.debounceTime(300).distinctUntilChanged().subscribe(str =>      
      this.eidrService.SearchString(str).subscribe(d => {
        this.data = [];
        if(d.__zone_symbol__value.Response.QueryResults[0].TotalMatches[0] != '0'){
        
          d.__zone_symbol__value.Response.QueryResults[0].SimpleMetadata.forEach(element => {
            let e = new eidr();
            e.ID = element.ID[0];
            e.OriginalLanguage = JSON.stringify(element.OriginalLanguage[0]);
            //e.ReferenceType = element.ReferenceType[0];
            e.ReleaseDate = element.ReleaseDate[0];
            e.ResourceName = JSON.stringify(element.ResourceName[0]);
            e.Status = element.Status[0];
            
            this.data= [...this.data, e];
          }); 
        }
      })
    );
    
    this.cols=[
      {field:'ID',header:'ID'},
      {field:'OriginalLanguage',header:'OriginalLanguage'},
      //{field:'ReferenceType',header:'ReferenceType'},
      {field:'ReleaseDate',header:'ReleaseDate'},
      {field:'ResourceName',header:'ResourceName'},
      {field:'Status',header:'Status'}      
    ]
  }

}
