
/*
 * 
 */

//Declare global variables
    var map;
    var infoWindow = new google.maps.InfoWindow();
    var redStations = [];
    var redBranchBraintree = [];
    var redBranchAshmont = [];
    var markers = [];
    var mapOptions = [];
    var request;
    var myLat;
    var myLong;
    var myPos;
    var myMarker;
    var me;
    var cMark;
    var cLat;
    var cLon;
    var cPos;
    var wMark;
    var wLat;
    var wLon;
    var wPos;

function loadMap() {
    checkAJAX();
    mapOptions = {
        center: new google.maps.LatLng(42.31129, -71.053331),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    loadRedLine();
    findCarmenAndWaldo();
    getMyLocation();

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
       
    if (request == null) {
        alert("Error creating request object --Ajax not supported?");
    } else {
    
        for (m = 0; m < markers.length; m++) {
            markers[m].setMap(map);
            google.maps.event.addListener(markers[m], 'click', function() {
                //GET AJAX SCHEDULE FOR TRAINS HERE AND RENDER IN PRETTY TABLE
                content = this.title; //Add all content into this content variable
                infoWindow.setContent(content);
                infoWindow.open(map, this);
            });
        }
    }
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


function findCarmenAndWaldo() {
    //Get positions of carmen and waldo, and print them to the screen.
    clogo = "images/carmen.png";
    wlogo = "images/waldo.png";
    var parsed = [];
    str = "";
        if (request == null) {
            alert("Error creating request object --Ajax not supported?");
            return false;
        }
    request.onreadystatechange=function() {
        if (request.readyState==4 && request.status==200) {
            str = request.responseText;
            parsed = JSON.parse(str);
            if (parsed.length == 0) console.log("Can't find Carmen or Waldo. Try a reload...?");
            else {
                for (i = 0; i < parsed.length; i++) {
                    if (parsed[i].name == "Waldo") {
                        wLat = parsed[i].loc.latitude; wLon = parsed[i].loc.longitude;
                        wPos = new google.maps.LatLng(wLat, wLon);
                        wMark = new google.maps.Marker({position: wPos, map: map, title: "Waldo", icon: wlogo});
                        wMark.setMap(map);
                    }
                    if (parsed[i].name == "Carmen Sandiego") {
                        cLat = parsed[i].loc.latitude; cLon = parsed[i].loc.longitude;
                        cPos = new google.maps.LatLng(cLat, cLon);
                        cMark = new google.maps.Marker({position: cPos, map: map, title: "Carmen Sandiego", icon: clogo});
                        cMark.setMap(map);
                    }
                }
            }
        }
    }
    request.open("GET", "http://messagehub.herokuapp.com/a3.json", true);
    request.send();
   // parsed = JSON.parse(str);

}

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLong = position.coords.longitude;
            myPos = new google.maps.LatLng(myLat, myLong);
            myMarker = new google.maps.Marker({position: myPos, map: map, title: "My Location"});
            myMarker.setMap(map);
            findDistances();
        });
    } else console.log("No geolocation for you. Get a new browser.");

}

function findDistances() {
  
    if (wPos != undefined) { // if wLat is defined, then Waldo appears on the screen.
        var dist = haversine (myLat, myLong, wLat, wLon);
      //  console.log("Distance from my position to Waldo: " + dist + " miles.");
        google.maps.event.addListener(wMark, 'click', function() {
            content = "Distance from my position to Waldo: " + dist + " miles.";
            infoWindow.setContent(content);
            infoWindow.open(map, wMark);
        });

    } else console.log("No Waldo.");
    if (cPos != undefined) { // if cLat is defined, then Carmen appears on the screen.
        var dist = haversine (myLat, myLong, cLat, cLon);
        google.maps.event.addListener(cMark, 'click', function() {
            content = "Distance from my position to Carmen: " + dist + " miles.";
            infoWindow.setContent(content);
            infoWindow.open(map, cMark);
        });
    } else console.log("No Carmen.");
}

function checkAJAX() {
    try {
        request = new XMLHttpRequest();
    }
    catch (ms1) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (ms2) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (ex) {
                request = null;
            }
        }
     }
}

Number.prototype.toRad = function() {
   return this * Math.PI / 180;
}

function haversine (lat1, lon1, lat2, lon2) {
    var R = 6371; // km 
    var x1 = lat2-lat1;
    var dLat = x1.toRad();  
    var x2 = lon2-lon1;
    var dLon = x2.toRad();  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; 

    d = d * .621371;
    return d;

}
