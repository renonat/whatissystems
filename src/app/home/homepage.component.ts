import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'homepage',
  styleUrls: ['homepage.component.scss'],
  templateUrl: 'homepage.component.html'
})
export class HomepageComponent implements OnInit {
  title = 'What is Systems?'

  contents: [ContentLink] = [
    new ContentLink('What do we learn?',
      'Our education exists at the intersection of Systems Theory and Design Thinking.',
      '#/our-education', 'rgba(40, 203, 252, 0.74)'), // blue
    new ContentLink('Is this a general engineering program?',
      'SYDE is its own speciality, and has great opportunities for specialization' ,
      '#/general-engineering', 'rgba(239, 94, 111, 0.74)'), // red
    new ContentLink('Is this some newfangled program?', 'Learn about the history of our program.',
      '#', 'rgba(2, 184, 117, 0.74)'), // green
    new ContentLink('Will this be the right fit for me?',
      'Explore what it means to be a SYDE student, and the community we have created.',
      '#/right-fit', 'rgba(221, 104, 244, 0.74)'), // purple
    new ContentLink('What is co-op like?', 'Everything from 4-stream to rankings, this is how to get a job 101',
      '#', 'rgba(70, 136, 241, 0.74)'), // dark blue
    new ContentLink('Where can I work?', 'What kinds of careers does SYDE prepare me for?',
      '#', 'rgba(255, 149, 0, 0.74)'), // amber
    new ContentLink('Student creations', 'Can I see some projects/businesses that SYDE students have created?',
      '#', 'rgba(88, 86, 214, 0.74)'), // dark purple
    new ContentLink('What next?', 'How to prep the summer before, and where to talk to current students.',
      '#', 'rgba(216, 27, 96, 0.74)'), // pink
  ];

  constructor(private router: Router,
              private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}

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
