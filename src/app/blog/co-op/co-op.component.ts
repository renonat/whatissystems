import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'co-op',
  templateUrl: 'co-op.component.html',
  styleUrls: ['co-op.component.scss']
})
export class CoopComponent implements OnInit {

  static path(): string {
    return 'co-op';
  }

  constructor() { }

  ngOnInit() {

  }

}
