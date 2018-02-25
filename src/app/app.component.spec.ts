import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocComponent } from './loc/loc.component';
import { EidrComponent } from './eidr/eidr.component';

import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';



import { AppRoutingModule } from './/app-routing.module';

import { LocService } from './loc/loc.service';
import { EidrService } from './eidr/eidr.service';
import { GlobalService } from './global.service';
import { UnderScoreDirective } from './directives/under-score.directive';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>, comp: AppComponent;
  let debugElement: DebugElement, element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LocComponent,
        EidrComponent
      ],
      imports: [
        NoopAnimationsModule,
        PanelModule,
        AppRoutingModule,
        RouterTestingModule,
        TableModule
      ],
      providers: [GlobalService, LocService, EidrService],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
  });
  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));
  it('should have a router outlet', async(() => {
    const router = fixture.debugElement.query(By.css('ui-router'));
    expect(router).toBeDefined();
  }));
});
