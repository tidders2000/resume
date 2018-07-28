        function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: {
                    lat: 52.912497,
                    lng: -0.643753
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
            var locations = [{
                lat: 52.912497,
                lng: -0.643753
            }, {
                lat: 52.765237,
                lng: -0.886775
            }, {
                lat: 53.072759,
                lng: -0.813535
            },{
                lat: 52.930876,
                lng: -1.133776
            },{
                lat: 52.765237,
                lng: -0.380889
            }];
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }