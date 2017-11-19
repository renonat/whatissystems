import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-general-engineering',
  templateUrl: 'general-engineering.component.html',
  styleUrls: ['general-engineering.component.scss']
})
export class GeneralEngineeringComponent implements OnInit {

  options: [DegreeOption] = [
    new DegreeOption('Biomechanics',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Biomechanics1',
      'Take the engineer\'s role in solving health care problems.'),
    new DegreeOption('Entrepreneurship',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Entrepreneurship-6',
      'Provides academic and experiential learning  with respect to venture creation and corporate entrepreneurship.'),
    new DegreeOption('Environmental Engineering',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Environmental-Engineering1',
      'Emphasises environmental concerns, impact assessment, and solving/managing environmental problems.'),
    new DegreeOption('International Studies in Engineering',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-International-Studies-in-Engineering1',
      'Enriches courses on the global nature of engineering with international experience.'),
    new DegreeOption('Life Sciences',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Life-Sciences1',
      'Increases understanding of the structure and function of biological systems.'),
    new DegreeOption('Management Sciences',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Management-Sciences1',
      'Prepares students for decision making roles in business and technology management.'),
    new DegreeOption('Mathematics',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Mathematics1',
      'Provides a broad background in either pure or applied mathematics.'),
    new DegreeOption('Mechatronics',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Mechatronics1',
      'Examines systems that link and integrate mechanical, electrical, and computer engineering.'),
    new DegreeOption('Physical Sciences',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Physical-Sciences1',
      'Provides deeper knowledge of physics, chemistry, and Earth & Environmental Sciences.'),
    new DegreeOption('Statistics',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Statistics1',
      'Acquire a background in applied statistics, relevant for quality control and experimental design.'),
    new DegreeOption('Water Resources',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Option-in-Water-Resources1',
      'Related to the development, management, and protection of water resources.'),
  ];

  packages: [DegreeOption] = [
    new DegreeOption('Human Systems Engineering',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering',
      'Develop skills applicable to the design and analysis of systems that interact closely with humans.'),
    new DegreeOption('Intelligent Systems',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering',
      'Develop software systems with artificial perception and reasoning, think machine learning and A.I.'),
    new DegreeOption('Societal and Environmental Systems',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering',
      'Study societal and environmental systems, and the interactions between the natural and social environment.'),
    new DegreeOption('Systems Modelling and Analysis',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering',
      'Learn the mathematics and methods needed to understand and integrate complex systems.'),
    new DegreeOption('Computer Engineering',
      'https://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering',
      'Augment SYDE curriculum with a strong background in the hardware and software of computer systems.'),
  ];

  title = GeneralEngineeringComponent.title();

  static title(): string {
    return 'Is this general engineering?';
  }

  static path(): string {
    return 'general-engineering';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
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
