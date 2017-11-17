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
  title = OurEducationComponent.title();

  static title(): string {
    return 'What do we learn?';
  }

  static path(): string {
    return 'what-do-we-learn';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
