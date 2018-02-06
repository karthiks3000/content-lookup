import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {LocComponent} from './loc/loc.component';
import {EidrComponent} from './eidr/eidr.component';

const routes:Routes = [
  {path:'loc',component:LocComponent},
  {path:'eidr',component:EidrComponent},
  {path:'',redirectTo:'loc',pathMatch:'full'},
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
