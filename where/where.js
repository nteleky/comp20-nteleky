
/*
 * 
 */

//Declare global variables
    var map;
    var redStations = [];
        var redBranchBraintree = [];
        var redBranchAshmont = [];
    var markers = [];
    var mapOptions = [];

function loadMap() {
    mapOptions = {
        center: new google.maps.LatLng(42.320685, -71.052391),
        zoom: 12,
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
    pt = new google.maps.LatLng(42.365486, -71.103802);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Central Square", icon: tlogo}));
    redStations.push(pt);
    pt = new google.maps.LatLng(42.36249079, -71.08617653);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Kendall Square", icon: tlogo}));
    redStations.push(pt);
    pt = new google.maps.LatLng(42.361166, -71.070628);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Charles/MGH", icon: tlogo}));
    redStations.push(pt);
    pt = new google.maps.LatLng(42.35639457, -71.0624242);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Park St", icon: tlogo}));
    redStations.push(pt);
    pt = new google.maps.LatLng(42.355518, -71.060225);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Downtown Crossing", icon: tlogo}));
    redStations.push(pt);
    pt = new google.maps.LatLng(42.352271, -71.055242);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "South Station", icon: tlogo}));
    redStations.push(pt);
    pt = new google.maps.LatLng(42.342622, -71.056967);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Broadway", icon: tlogo}));
    redStations.push(pt);
    pt = new google.maps.LatLng(42.330154, -71.057655);
	markers.push(new google.maps.Marker({position: pt, map: map, title: "Andrew", icon: tlogo}));
	redStations.push(pt);
	pt = new google.maps.LatLng(42.320685, -71.052391);
	markers.push(new google.maps.Marker({position: pt, map: map, title: "JFK/UMass", icon: tlogo}));
	redStations.push(pt);
	redBranchAshmont.push(pt);
	redBranchBraintree.push(pt);
	pt = new google.maps.LatLng(42.275275, -71.029583);
	markers.push(new google.maps.Marker({position: pt, map: map, title: "North Quincy", icon: tlogo}));
	redBranchBraintree.push(pt);
	pt = new google.maps.LatLng(42.31129, -71.053331);
	markers.push(new google.maps.Marker({position: pt, map: map, title: "Savin Hill", icon: tlogo}));
	redBranchAshmont.push(pt);
    pt = new google.maps.LatLng(42.300093, -71.061667);
    markers.push(new google.maps.Marker({position: pt, map: map, title: "Fields Corner", icon: tlogo}));
	redBranchAshmont.push(pt);
	pt = new google.maps.LatLng(42.2665139, -71.0203369);
	markers.push(new google.maps.Marker({position: pt, map: map, title: "Wollaston", icon: tlogo}));
    redBranchBraintree.push(pt);
	pt = new google.maps.LatLng(42.251809, -71.005409);
	markers.push(new google.maps.Marker({position: pt, map: map, title: "Quincy Center", icon: tlogo}));
	redBranchBraintree.push(pt);
	pt = new google.maps.LatLng(42.29312583, -71.06573796);
	markers.push(new google.maps.Marker({position: pt, map: map, title: "Shawmut", icon: tlogo}));
	redBranchAshmont.push(pt);
	pt = new google.maps.LatLng(42.233391, -71.007153);
	markers.push(new google.maps.Marker({position: pt, map: map, title: "Quincy Adams", icon: tlogo}));
	redBranchBraintree.push(pt);
	pt = new google.maps.LatLng(42.284652, -71.064489);
	markers.push(new google.maps.Marker({position: pt, map: map, title: "Ashmont", icon: tlogo}));
	redBranchAshmont.push(pt);
	pt = new google.maps.LatLng(42.2078543, -71.0011385);
	markers.push(new google.maps.Marker({position: pt, map: map, title: "Braintree", icon: tlogo}));
	redBranchBraintree.push(pt);

    // Create polyline for Red Line Subway Stops
    redLine = new google.maps.Polyline({
        path: redStations,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 10
    }); redLine.setMap(map);
        redLine = new google.maps.Polyline({
        path: redBranchBraintree,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 10
    }); redLine.setMap(map);
        redLine = new google.maps.Polyline({
        path: redBranchAshmont,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 10
    });
    redLine.setMap(map);


}

