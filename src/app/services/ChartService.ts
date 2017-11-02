import { Injectable } from '@angular/core';
declare var Chart: any;

@Injectable()
export class ChartService {

  static theRightFitOnLoad(): void {

    let chartNumberOfFriendsInSyde = function() {
      let data = {
        labels: ['1-5', '6-10', '11-15', '16-20', '20-25', '25+'],
        datasets: [
          {
            values: [20, 33, 14, 16, 9, 8]
          }
        ]
      };

      new Chart({
        parent: '#chart-number-of-friends-in-syde',
        title: 'Number of Friends in SYDE',
        data: data,
        type: 'percentage'
      });
    };

    let chartNumberOfFiveClosestFriendsInSyde = function() {
      let data = {
        labels: ['0', '1', '2', '3', '4', '5'],
        datasets: [
          {
            values: [8, 7, 17, 15, 18, 35]
          }
        ]
      };

      new Chart({
        parent: '#chart-number-of-five-closest-friends-in-syde',
        title: 'Number of 5 Closest Friends in SYDE',
        data: data,
        type: 'percentage'
      });
    };

    let chartSydeEventAttendance = function() {
      let data = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [
          {
            values: [5, 3, 4, 8, 6, 7, 7, 16, 42]
          }
        ]
      };

      new Chart({
        parent: '#chart-syde-event-attendance',
        title: 'Number of terms where attended at least 1 SYDE event',
        data: data,
        type: 'bar'
      });
    };

    chartNumberOfFriendsInSyde();
    chartNumberOfFiveClosestFriendsInSyde();
    chartSydeEventAttendance();
  }

  static coopOnLoad(): void {
    let chartHourlySalary = function() {
      let data = {
        labels: ['$0', '$2.5', '$5', '$7.5', '$10', '$12.5', '$15', '$17.5', '$20', '$22.5', '$25', '$27.5', '$30',
          '$32.5', '$35', '$37.5', '$40', '$42.5', '$45', '$47.5', '$50', '$52.5', '$55', '$57.5', '$60', '$63.5', '$65'],
        datasets: [
          { title: '1A', color: 'red',        values: [0,   0,   0,   0,   0,   4,   15,  19,  5,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0  ] },
          { title: '1B', color: 'yellow',     values: [0,   1,   0,   0,   0,   2,   9,   13.5,  12,  5,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0  ] },
          { title: '2A', color: 'green',      values: [0.5, 0.5, 0,   0,   0.5, 2,   4,   7,   9.5, 8.5, 4,   1.5, 1,   0.5, 1,   1,   0.5, 1,   0.5, 0,   0,   0,   0,   0,   0,   0,   0  ] },
          { title: '2B', color: 'light-blue', values: [0,   0,   0,   0,   0.5, 1,   2,   3.5, 6.5, 7.5, 5.5, 3,   2,   1.5, 1,   1,   1.5, 1.5, 1,   1,   1,   0.5, 0.5, 0,   0,   0,   0  ] },
          { title: '3A', color: 'blue',       values: [0,   0,   0,   0.5, 1,   1,   2,   2.5, 3,   3.5, 3.5, 3.5, 3,   2.5, 1.8, 1.4, 1,   1,   1,   1.2, 1.4, 1.5, 1.5, 1.4, 1.3, 1,   0.8] },
          { title: '3B', color: 'purple',     values: [0.2, 0.3, 0.4, 0.4, 0.5, 0.9, 1.4, 2,   2.6, 3.1, 3.4, 3.2, 2.8, 2.3, 1.8, 1.5, 1.3, 1.5, 1.6, 1.7, 1.7, 1.6, 1.5, 1.3, 1.2, 1,   0.8] }
        ]
      };

      new Chart({
        parent: '#chart-hourly-salary',
        title: 'Hourly Salary in CAD (Proportion of Class)',
        data: data,
        type: 'line',
        region_fill: 1,
        show_dots: 0,
        height: 350,
      });
    };

    chartHourlySalary();
  }

}
