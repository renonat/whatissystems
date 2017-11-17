import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'careers',
  templateUrl: 'careers.component.html',
  styleUrls: ['careers.component.scss']
})
export class CareersComponent implements OnInit {
  title = CareersComponent.title();

  static title(): string {
    return 'Where can I work?';
  }
  static path(): string {
    return 'careers';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
