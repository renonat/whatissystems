import {
  Component, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'post-our-education',
  styleUrls: ['blog.component.css', 'our-education.component.css'],
  templateUrl: 'our-education.component.html'
})
export class PostOurEducationComponent implements OnInit {
  title = 'Our Education';

  constructor(private router: Router,
              private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}