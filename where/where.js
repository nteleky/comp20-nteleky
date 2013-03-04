
/*
 * 
 */
function loadMap() {
    var mapOptions = {
        center: new google.maps.LatLng(39.027719, -75.289307),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}
