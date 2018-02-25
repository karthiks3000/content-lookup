import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TableModule} from 'primeng/table';



import { AppComponent } from './app.component';
import { LocComponent } from './loc/loc.component';
import { EidrComponent } from './eidr/eidr.component';

import {HttpModule} from '@angular/http';

import { LocService } from './loc/loc.service';
import { EidrService } from './eidr/eidr.service';
import { AppRoutingModule } from './/app-routing.module';
import { GlobalService } from './global.service';
import { UnderScoreDirective } from './directives/under-score.directive';



@NgModule({
  declarations: [
    AppComponent,
    LocComponent,
    EidrComponent,
    UnderScoreDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SidebarModule,
    ButtonModule,
    PanelModule,
    MenuModule,
    InputTextModule,
    ScrollPanelModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [GlobalService, LocService, EidrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
