import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'What is Systems?';

  toggleShowDropdownLearn = false;

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  showDropdownLearn(): void {
    this.toggleShowDropdownLearn = !this.toggleShowDropdownLearn;
  }

}
