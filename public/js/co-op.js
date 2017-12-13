function coopOnLoad() {
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

  let chartStudentDebt = function() {
    let data = {
      labels: ['$0', '$5k', '$10k', '$15k', '$20k', '$25k', '$30k', '$30k+'],
      datasets: [
        {
          values: [46, 3, 5, 17, 9, 9, 3, 8]
        }
      ]
    };

    new Chart({
      parent: '#chart-student-debt',
      title: 'Student debt on graduation',
      data: data,
      type: 'bar',
    });
  }

  chartHourlySalary();
  chartStudentDebt()
}
