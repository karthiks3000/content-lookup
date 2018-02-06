import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subject } from 'rxjs/Subject';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showSideNav:boolean = false; 
  constructor(public globalService:GlobalService){}
  ngOnInit() {    
   
  }
}
