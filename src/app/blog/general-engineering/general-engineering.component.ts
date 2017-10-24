import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-engineering',
  templateUrl: 'general-engineering.component.html',
  styleUrls: ['general-engineering.component.scss']
})
export class GeneralEngineeringComponent implements OnInit {

  options: [DegreeOption] = [
    new DegreeOption('Biomechanics',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Biomechanics1',
      'This is a description'),
    new DegreeOption('Computer Engineering',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Computer-Engineering1',
      'This is a description'),
    new DegreeOption('Entrepreneurship',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Entrepreneurship-6',
      'This is a description'),
    new DegreeOption('Environmental Engineering',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Environmental-Engineering1',
      'This is a description'),
    new DegreeOption('International Studies in Engineering',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-International-Studies-in-Engineering1',
      'This is a description'),
    new DegreeOption('Life Sciences',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Life-Sciences1',
      'This is a description'),
    new DegreeOption('Management Sciences',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Management-Sciences1',
      'This is a description'),
    new DegreeOption('Mathematics',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Mathematics1',
      'This is a description'),
    new DegreeOption('Mechatronics',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Mechatronics1',
      'This is a description'),
    new DegreeOption('Physical Sciences',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Physical-Sciences1',
      'This is a description'),
    new DegreeOption('Software Engineering',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Software-Engineering1',
      'This is a description'),
    new DegreeOption('Statistics',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Statistics1',
      'This is a description'),
    new DegreeOption('Water Resources',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Water-Resources1',
      'This is a description'),
  ];

  packages: [DegreeOption] = [
    new DegreeOption('Human Systems Engineering',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering',
      'This is a Description'),
    new DegreeOption('Intelligent Systems',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering',
      'This is a Description'),
    new DegreeOption('Societal and Environmental Systems',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering',
      'This is a Description'),
    new DegreeOption('Systems Modelling and Analysis',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering',
      'This is a Description'),
  ];

  static path(): string {
    return 'general-engineering';
  }

  constructor() { }

  ngOnInit() {

  }

}

export class DegreeOption {
  name: string;
  link: string;
  description: string;

  constructor(_name: string, _link: string, _description: string) {
    this.name = _name;
    this.link = _link;
    this.description = _description;
  }
}
