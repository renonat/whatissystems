import {
  Component, OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'our-education',
  styleUrls: ['our-education.component.scss'],
  templateUrl: 'our-education.component.html'
})
export class OurEducationComponent implements OnInit {
  title = 'Our Education';

  static path(): string {
    return 'what-we-learn';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
