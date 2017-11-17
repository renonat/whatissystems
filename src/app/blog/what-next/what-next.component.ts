import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'what-next',
  templateUrl: 'what-next.component.html',
  styleUrls: ['what-next.component.scss']
})
export class WhatNextComponent implements OnInit {
  title = WhatNextComponent.title();

  static title(): string {
    return 'What next?';
  }

  static path(): string {
    return 'what-next';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
