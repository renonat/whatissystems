import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'careers',
  templateUrl: 'careers.component.html',
  styleUrls: ['careers.component.scss']
})
export class CareersComponent implements OnInit {

  static path(): string {
    return 'careers';
  }

  constructor() { }

  ngOnInit(): void {

  }

}
