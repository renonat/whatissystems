import {Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'What is Systems?';

  showDropdownLearn = false;

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  toggleDropdownLearn(): void {
    this.showDropdownLearn = !this.showDropdownLearn;
  }

  hideDropdownLearn(): void {
    this.showDropdownLearn = false;
  }


}
