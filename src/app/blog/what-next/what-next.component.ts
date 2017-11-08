import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'what-next',
  templateUrl: 'what-next.component.html',
  styleUrls: ['what-next.component.scss']
})
export class WhatNextComponent implements OnInit {

  static path(): string {
    return 'what-next';
  }

  constructor() { }

  ngOnInit(): void {

  }

}
