import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalService {
  searchTerm$ = new Subject<string>();
  selectedPage:string = "Library of Congress";

  constructor() { }

}
