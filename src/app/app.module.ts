import { NgModule }      from '@angular/core';

import { AppComponent }  from './home/app.component';
import { PostOurEducationComponent } from './blog/our-education.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'our-education', component: PostOurEducationComponent},
  { path: 'home', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, HttpModule, HttpClientModule
  ],
  declarations: [ AppComponent, PostOurEducationComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ Title, {provide: LocationStrategy, useClass: HashLocationStrategy } ]
})

export class AppModule {
}
