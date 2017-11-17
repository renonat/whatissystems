import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/ChartService';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'co-op',
  templateUrl: 'co-op.component.html',
  styleUrls: ['co-op.component.scss']
})
export class CoopComponent implements OnInit {
  title = CoopComponent.title();

  coopData: [CoopStreamData] = [
    new CoopStreamData('1', 'Fall',   'Study', 'Study'),
    new CoopStreamData('',  'Winter', 'Work',  'Study'),
    new CoopStreamData('',  'Spring', 'Study', 'Work'),
    new CoopStreamData('2', 'Fall',   'Work',  'Study'),
    new CoopStreamData('',  'Winter', 'Study', 'Work'),
    new CoopStreamData('',  'Spring', 'Work',  'Study'),
    new CoopStreamData('3', 'Fall',   'Study', 'Work'),
    new CoopStreamData('',  'Winter', 'Work',  'Study'),
    new CoopStreamData('',  'Spring', 'Study', 'Work'),
    new CoopStreamData('4', 'Fall',   'Work',  'Study'),
    new CoopStreamData('',  'Winter', 'Study', 'Work'),
    new CoopStreamData('',  'Spring', 'Work',  'Study'),
    new CoopStreamData('5', 'Fall',   'Study', 'Work'),
    new CoopStreamData('',  'Winter', 'Study', 'Study')
  ]

  static title(): string {
    return 'What is co-op like?';
  }

  static path(): string {
    return 'co-op';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    ChartService.coopOnLoad();
  }

}

export class CoopStreamData {
  term: string;
  year: string;
  stream4: string;
  stream8: string;

  constructor(year: string, term: string, stream4: string, stream8: string) {
    this.term = term;
    this.year = year;
    this.stream4 = stream4;
    this.stream8 = stream8;
  }
}
