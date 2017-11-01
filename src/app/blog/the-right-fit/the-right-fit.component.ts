import {
  Component, OnInit,
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
  title = 'The Right Fit';

  static path(): string {
    return 'the-right-fit';
  }

  constructor(private titleService: Title,
              private chartService: ChartService) {

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.chartService.theRightFitOnLoad();
  }

}
