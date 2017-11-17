import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss']
})
export class HistoryComponent implements OnInit {
  title = HistoryComponent.title();

  static title(): string {
    return 'Is this a new program?';
  }

  static path(): string {
    return 'history';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
