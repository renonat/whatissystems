import {
  Component, OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'post-the-right-fit',
  styleUrls: ['the-right-fit.component.scss'],
  templateUrl: 'the-right-fit.component.html'
})
export class TheRightFitComponent implements OnInit {
  title = 'The Right Fit';

  static path(): string {
    return 'the-right-fit';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
