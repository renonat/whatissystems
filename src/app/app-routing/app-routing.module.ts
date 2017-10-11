import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurEducationComponent } from '../blog/our-education/our-education.component';
import { GeneralEngineeringComponent } from '../blog/general-engineering/general-engineering.component';
import { AppComponent } from '../home/app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'our-education', component: OurEducationComponent },
  { path: 'general-engineering', component: GeneralEngineeringComponent },
  { path: 'home', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }