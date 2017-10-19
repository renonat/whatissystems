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
import {TheRightFitComponent} from './blog/the-right-fit/the-right-fit.component';

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
    ClickOutsideDirective
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ Title, {provide: LocationStrategy, useClass: HashLocationStrategy } ]
})

export class AppModule {
}
