
/*
 * 
 */

//Declare global variables
    var map;
    var redStations = [];
    var markers = [];
    var mapOptions = [];

function loadMap() {
    mapOptions = {
        center: new google.maps.LatLng(42.330497742, -71.095794678),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    loadRedLine();
}

function loadRedLine() {
    tlogo = "images/tlogo.png";
    
    pt = new google.maps.LatLng(42.395428, -71.142483);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Alewife", icon: tlogo}));
    redStations.push(pt);

    pt = new google.maps.LatLng(42.39674, -71.121815);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Davis", icon: tlogo}));
    redStations.push(pt);
    pt = new google.maps.LatLng(42.3884, -71.119149);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Porter Square", icon: tlogo}));
    redStations.push(pt);
    pt = new google.maps.LatLng(42.373362, -71.118956);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Harvard Square", icon: tlogo}));
    redStations.push(pt);

    // Create polyline for Red Line Subway Stops
    redLine = new google.maps.Polyline({
        path: redStations,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 10
    });
    redLine.setMap(map);


}

