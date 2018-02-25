import { Component, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { OnInit, AfterViewInit, AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subject } from 'rxjs/Subject';
import { GlobalService } from './global.service';
import { LocComponent } from './loc/loc.component';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  showSideNav = false;
  @ViewChild('LocComponent') viewChild: LocComponent;
  private prevTitle = '';

  constructor(public globalService: GlobalService) {}
  ngOnInit() {

  }

  ngAfterViewInit(): void {
    console.log('view initialized');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');

  }
}
