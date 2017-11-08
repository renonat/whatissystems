import { NgModule }      from '@angular/core';

import { AppComponent }  from './header/app.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OurEducationComponent } from './blog/our-education/our-education.component';
import { GeneralEngineeringComponent } from './blog/general-engineering/general-engineering.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomepageComponent } from './home/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideDirective } from './directives/clickOutside.directive';
import { TheRightFitComponent } from './blog/the-right-fit/the-right-fit.component';
import { CoopComponent } from './blog/co-op/co-op.component';
import {CareersComponent} from './blog/careers/careers.component';
import {HistoryComponent} from './blog/history/history.component';
import {StudentCreationsComponent} from './blog/student-creations/student-creations.component';
import {WhatNextComponent} from './blog/what-next/what-next.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    OurEducationComponent,
    GeneralEngineeringComponent,
    TheRightFitComponent,
    CoopComponent,
    CareersComponent,
    HistoryComponent,
    StudentCreationsComponent,
    WhatNextComponent,
    ClickOutsideDirective
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ Title, {provide: LocationStrategy, useClass: HashLocationStrategy } ]
})

export class AppModule {
}
