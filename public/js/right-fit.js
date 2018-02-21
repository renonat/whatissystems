function rightFitOnLoad() {
  
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
          type: 'bar',
          colors: ['#ef5e6f']
        });
      };
  
      chartNumberOfFriendsInSyde();
      chartNumberOfFiveClosestFriendsInSyde();
      chartSydeEventAttendance();
    }