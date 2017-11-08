import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurEducationComponent } from '../blog/our-education/our-education.component';
import { GeneralEngineeringComponent } from '../blog/general-engineering/general-engineering.component';
import { HomepageComponent } from '../home/homepage.component';
import {TheRightFitComponent} from '../blog/the-right-fit/the-right-fit.component';
import {CoopComponent} from '../blog/co-op/co-op.component';
import {CareersComponent} from '../blog/careers/careers.component';
import {HistoryComponent} from '../blog/history/history.component';
import {StudentCreationsComponent} from '../blog/student-creations/student-creations.component';
import {WhatNextComponent} from '../blog/what-next/what-next.component';

const appRoutes: Routes = [
  { path: '', redirectTo: HomepageComponent.path(), pathMatch: 'full' },
  { path: OurEducationComponent.path(),       component: OurEducationComponent },
  { path: GeneralEngineeringComponent.path(), component: GeneralEngineeringComponent },
  { path: TheRightFitComponent.path(),        component: TheRightFitComponent },
  { path: CoopComponent.path(),               component: CoopComponent },
  { path: HomepageComponent.path(),           component: HomepageComponent },
  { path: CareersComponent.path(),            component: CareersComponent },
  { path: HistoryComponent.path(),            component: HistoryComponent },
  { path: StudentCreationsComponent.path(),   component: StudentCreationsComponent },
  { path: WhatNextComponent.path(),           component: WhatNextComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
