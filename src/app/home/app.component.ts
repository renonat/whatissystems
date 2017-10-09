import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'What is Systems?';

  constructor(private router: Router,
              private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
