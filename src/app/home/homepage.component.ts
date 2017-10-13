import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'homepage',
  styleUrls: ['homepage.component.css'],
  templateUrl: 'homepage.component.html'
})
export class HomepageComponent implements OnInit {
  title = 'What is Systems?'

  constructor(private router: Router,
              private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
