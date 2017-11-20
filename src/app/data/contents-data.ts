import { OurEducationComponent } from '../blog/our-education/our-education.component';
import { GeneralEngineeringComponent } from '../blog/general-engineering/general-engineering.component';
import { TheRightFitComponent } from '../blog/the-right-fit/the-right-fit.component';
import { CoopComponent } from '../blog/co-op/co-op.component';
import { CareersComponent } from '../blog/careers/careers.component';
import { HistoryComponent } from '../blog/history/history.component';
import { StudentCreationsComponent } from '../blog/student-creations/student-creations.component';
import { WhatNextComponent } from '../blog/what-next/what-next.component';

export class ContentLink {
  header: string;
  link: string;
  description: string;
  color: string;

  constructor(_header: string, _description: string, _link: string, _color: string) {
    this.header = _header;
    this.link = _link;
    this.description = _description;
    this.color = _color;
  }
}

export const TABLE_OF_CONTENTS: [ContentLink] = [
  new ContentLink(OurEducationComponent.title(),
    'We learn how to technically analyze systems and use the engineering design process from first idea to production.',
    '#/' + OurEducationComponent.path(), 'rgb(40, 203, 252)'), // blue
  new ContentLink(GeneralEngineeringComponent.title(),
    'SYDE is its own unique discipline, and has great opportunities for specialization' ,
    '#/' + GeneralEngineeringComponent.path(), 'rgb(239, 94, 111)'), // red
  new ContentLink(HistoryComponent.title(),
    'Learn about the history of our program, stretching back to 1960.',
    '#/' + HistoryComponent.path(), 'rgb(2, 184, 117)'), // green
  new ContentLink(TheRightFitComponent.title(),
    'Explore what it means to be a SYDE student and a part of our community.',
    '#/' + TheRightFitComponent.path(), 'rgb(221, 104, 244)'), // purple
  new ContentLink(CoopComponent.title(),
    'Learn about the co-op process and paying for your education.',
    '#/' + CoopComponent.path(), 'rgb(70, 136, 241)'), // dark blue
  new ContentLink(CareersComponent.title(),
    'SYDEs have worked in almost every industry: the possibilities are endless.',
    '#/' + CareersComponent.path(), 'rgb(255, 149, 0)'), // amber
  new ContentLink(StudentCreationsComponent.title(),
    'SYDE students have a history of creating impressive design projects and companies.',
    '#/' + StudentCreationsComponent.path(), 'rgb(88, 86, 214)'), // dark purple
  new ContentLink(WhatNextComponent.title(),
    'How to prep the summer before, and where to talk to current students.',
    '#/' + WhatNextComponent.path(), 'rgb(216, 27, 96)'), // pink
];
