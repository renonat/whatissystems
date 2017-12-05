import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TABLE_OF_CONTENTS } from '../data/contents-data';
import {Router} from '@angular/router';

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

  constructor(private titleService: Title,
              private router: Router) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  onClickContentLink(link: string) {
  }
}
