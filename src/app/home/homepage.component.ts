import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TABLE_OF_CONTENTS } from '../data/contents-data';

@Component({
  selector: 'homepage',
  styleUrls: ['homepage.component.scss'],
  templateUrl: 'homepage.component.html'
})
export class HomepageComponent implements OnInit {
  title = 'What is Systems?';

  contents = TABLE_OF_CONTENTS;

  static path(): string {
    return 'home';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
