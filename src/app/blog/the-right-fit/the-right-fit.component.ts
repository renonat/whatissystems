import {
  Component, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'post-the-right-fit',
  styleUrls: ['../blog.component.css', 'the-right-fit.component.css'],
  templateUrl: 'the-right-fit.component.html'
})
export class TheRightFitComponent implements OnInit {
  title = 'The Right Fit';

  constructor(private router: Router,
              private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
