import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'student-creations',
  templateUrl: 'student-creations.component.html',
  styleUrls: ['student-creations.component.scss']
})
export class StudentCreationsComponent implements OnInit {
  title = StudentCreationsComponent.title();

  static title(): string {
    return 'Student creations?';
  }

  static path(): string {
    return 'student-creations';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
