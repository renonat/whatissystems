function initMap() {
    
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 43.4722, lng: -80.5472}
  });
  this.infoWindow = new google.maps.InfoWindow();

  // Load the co-op data
  $.ajax({
    url: "data/coop_positions.json",
    isLocal: true,
    dataType: "text"
  })
  .done(function(data){
    // Generate map data from json file
    var locations = generateLocations(data);
    
    var markers = locations.map(function(location, i) {
      var marker = new google.maps.Marker({
        position: location,
        title: location.title
      });

      google.maps.event.addListener(marker, 'click', function() {
        showInfoWindow(map, marker, location.info)
      });

      return marker;
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
         minimumClusterSize: 3,
         maxZoom: 13});
  })
  .fail(function(data){
    console.log("AJAX for co-op data - Fail!");
    console.log(data);
  })
}

function showInfoWindow(map, marker, string) {
  this.infoWindow.setContent(string);
  this.infoWindow.open(map, marker);
}

function generateLocations(json) {
  var results = JSON.parse(json);

  var locations = results.data.map(function(data, i) {
    var infoString = "";
    infoString += "<div class='info-window'>";
    infoString += "<h1>" + data.job + " at " + data.company + "</h1>";
    infoString += "<p>" + ordinate(data.coop) + " co-op term, " + data.year + "</p>";
    infoString += "<p><strong>" + data.location + "</p></strong>";
    infoString += "</div>"
    
    var title = data.job + ", " + data.company;
    
    return {lat: parseFloat(data.lat) + randLatLngFuzz(), 
            lng: parseFloat(data.lng) + randLatLngFuzz(), 
            info: infoString, 
            title: title};
  })

  return locations;
}

function randLatLngFuzz() {
  return randomIntFromInterval(-25, 25) / 100000;
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}