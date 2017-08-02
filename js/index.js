/**
 * Created by drox2014 on 7/30/2017.
 */
var map;
var timerObj;
var markers = [];
var center = {lat:6.548949,lng:80.042151};
var locations = [center,{lat:6.547203,lng:80.042393},{lat:6.545236,lng:80.042713},{lat:6.542897,lng:80.043027}];

var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: center
    });

}

function setMarker() {
    if(locations.length > 0){
        var location = locations.pop();
        var marker = new google.maps.Marker({
            position: location,
            icon: './img/bus_24x68.png',
            map: map
        });

        var infowindow = new google.maps.InfoWindow({
            content: '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Kottawa - Matara</h1>'+
            '<div id="bodyContent">'+
            '<p>Arrival Time : 10.30 AM</p>'+
            '<p>Bus No : XX-XXXX</p>'+
            '</div>'+
            '</div>'
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        marker.setMap(map);
        map.setCenter(location);
        markers.push(marker);
        removeMarker(1);
    }else{
        removeMarker(0);
        locations = [center,{lat:6.547203,lng:80.042393},{lat:6.545236,lng:80.042713},{lat:6.542897,lng:80.043027}];
    }
}

function removeMarker(length) {
    while(markers.length > length){
        var marker = markers.shift();
        marker.setMap(null);
    }
}

function removeMarkers() {
    clearInterval(timerObj);
}

function startMarker() {
    timerObj = setInterval(function () {
        setMarker();
    }, 3000);
}


