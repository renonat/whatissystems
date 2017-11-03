import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss']
})
export class HistoryComponent implements OnInit {

  static path(): string {
    return 'history';
  }

  constructor() { }

  ngOnInit(): void {

  }

}
