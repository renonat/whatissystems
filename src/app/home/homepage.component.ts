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
    new ContentLink('What do we learn?', '#/our-education', 'A description', 'rgba(40, 203, 252, 0.84)'),
    new ContentLink('Is this general engineering?', '#/general-engineering', 'A description', 'rgba(239, 94, 111, 0.84)'),
    new ContentLink('Is this the right fit for me?', '#/the-right-fit', 'A description', 'rgba(221, 104, 244, 0.84)'),
    new ContentLink('What do we learn?', '#/our-education', 'A description', 'rgba(40, 203, 252, 0.84)')
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

  constructor(_header: string, _link: string, _description: string, _color: string) {
    this.header = _header;
    this.link = _link;
    this.description = _description;
    this.color = _color;
  }
}
