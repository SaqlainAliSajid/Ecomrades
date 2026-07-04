// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var displayYear = document.querySelector("#displayYear");

    if (displayYear) {
        displayYear.textContent = currentYear;
    }
}

getYear();


/** google_map js **/
function myMap() {
    var mapElement = document.getElementById("googleMap");

    if (!mapElement || typeof google === "undefined" || !google.maps) {
        return;
    }

    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(mapElement, mapProp);
}