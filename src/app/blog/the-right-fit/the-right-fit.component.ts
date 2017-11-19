import {
  Component, OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChartService } from '../../services/ChartService';

@Component({
  selector: 'post-the-right-fit',
  styleUrls: ['the-right-fit.component.scss'],
  templateUrl: 'the-right-fit.component.html',
  providers: [ChartService]
})
export class TheRightFitComponent implements OnInit {
  title = TheRightFitComponent.title();

  static title(): string {
    return 'Is this the right fit for me?';
  }

  static path(): string {
    return 'the-right-fit';
  }

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    ChartService.theRightFitOnLoad();
  }

}
