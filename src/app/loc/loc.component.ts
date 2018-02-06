import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { LocService } from './loc.service';
import { Subject } from 'rxjs/Subject';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-loc',
  templateUrl: './loc.component.html',
  styleUrls: ['./loc.component.css'],
  providers:[]
})
export class LocComponent implements OnInit {
  data:any;
  cols:any[];
  // @Input() searchTerm$ = new Subject<string>();

  constructor(private locService:LocService,private globalService:GlobalService) { }


  ngOnInit() {
    this.globalService.selectedPage = "Library of Congress";
    this.globalService.searchTerm$.debounceTime(300).distinctUntilChanged().subscribe((str:string) =>{
      this.locService.SearchString(str).subscribe(d => {
        this.data = d.response.docs;
      })
    });
    this.cols=[
      {field:'id',header:'ID'},
      {field:'title',header:'Title'},
      
    ]
  }

}
