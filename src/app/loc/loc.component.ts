import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocService } from './loc.service';
import { Subject } from 'rxjs/Subject';
import { GlobalService } from '../global.service';
import { OnDestroy, OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-loc',
  templateUrl: './loc.component.html',
  styleUrls: ['./loc.component.css'],
  providers: []
})
export class LocComponent implements OnInit, OnDestroy, OnChanges {


  data: any[];
  cols: any[];
  subscription: Subscription;

  // @Input() searchTerm$ = new Subject<string>();

  constructor(private locService: LocService, private globalService: GlobalService) { }


  ngOnInit() {
    this.globalService.selectedPage = 'Library of Congress';
    this.subscription = this.globalService.searchTerm$.debounceTime(300).distinctUntilChanged().subscribe((str: string) => {
      this.locService.SearchString(str).subscribe(d => {
        this.data = d.response.docs;
      });
    });
    this.cols = [
      {field: 'id', header: 'ID'},
      {field: 'title', header: 'Title'},

    ];

    console.log('initialized');
  }

  ngOnDestroy() {
    console.log('destroyed');
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges');

    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }


}
