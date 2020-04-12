
function initMap() {
    var india = {
        lat: 17.471757, 
        lng: 78.5478227
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: india,
        zoom: 11,
        mapTypeId: 'roadmap',
    });
}