import { OurEducationComponent } from '../blog/our-education/our-education.component';
import { GeneralEngineeringComponent } from '../blog/general-engineering/general-engineering.component';
import { TheRightFitComponent } from '../blog/the-right-fit/the-right-fit.component';
import { CoopComponent } from '../blog/co-op/co-op.component';
import {CareersComponent} from '../blog/careers/careers.component';
import {HistoryComponent} from '../blog/history/history.component';
import {StudentCreationsComponent} from '../blog/student-creations/student-creations.component';
import {WhatNextComponent} from '../blog/what-next/what-next.component';

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
  new ContentLink('What do we learn?',
    'Our education exists at the intersection of Systems Theory and Design Thinking.',
    '#/' + OurEducationComponent.path(), 'rgb(40, 203, 252)'), // blue
  new ContentLink('Is this a general engineering program?',
    'SYDE is its own speciality, and has great opportunities for specialization' ,
    '#/' + GeneralEngineeringComponent.path(), 'rgb(239, 94, 111)'), // red
  new ContentLink('Is this some newfangled program?', 'Learn about the history of our program.',
    '#/' + HistoryComponent.path(), 'rgb(2, 184, 117)'), // green
  new ContentLink('Will this be the right fit for me?',
    'Explore what it means to be a SYDE student, and the community we have created.',
    '#/' + TheRightFitComponent.path(), 'rgb(221, 104, 244)'), // purple
  new ContentLink('What is co-op like?', 'Everything from 4-stream to rankings, this is how to get a job 101',
    '#/' + CoopComponent.path(), 'rgb(70, 136, 241)'), // dark blue
  new ContentLink('Where can I work?', 'What kinds of careers does SYDE prepare me for?',
    '#/' + CareersComponent.path(), 'rgb(255, 149, 0)'), // amber
  new ContentLink('Student creations', 'Can I see some projects/businesses that SYDE students have created?',
    '#/' + StudentCreationsComponent.path(), 'rgb(88, 86, 214)'), // dark purple
  new ContentLink('What next?', 'How to prep the summer before, and where to talk to current students.',
    '#/' + WhatNextComponent.path(), 'rgb(216, 27, 96)'), // pink
];
