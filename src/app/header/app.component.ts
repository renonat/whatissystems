import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TABLE_OF_CONTENTS } from '../data/contents-data';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'What is Systems?';

  showDropdownLearn = false;

  contents = TABLE_OF_CONTENTS;

  constructor(private titleService: Title,
              private router: Router) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  toggleDropdownLearn(): void {
    this.showDropdownLearn = !this.showDropdownLearn;
  }

  hideDropdownLearn(): void {
    this.showDropdownLearn = false;
  }

}
