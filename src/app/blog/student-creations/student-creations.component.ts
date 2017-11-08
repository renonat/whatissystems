import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-creations',
  templateUrl: 'student-creations.component.html',
  styleUrls: ['student-creations.component.scss']
})
export class StudentCreationsComponent implements OnInit {

  static path(): string {
    return 'student-creations';
  }

  constructor() { }

  ngOnInit(): void {

  }

}
