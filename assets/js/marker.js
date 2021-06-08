function initMap () {
    const map = new google.maps.Map( document.
        getElementById( "map" ), {
        zoom: 3,
        center: { lat: -28.024, lng: 140.887 },
    }
    );

    // Create an array of alphabetical 
    // characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.
    prototype.map() method to
    // create an array of markers based on a 
    given "locations" array.
    // The map() method here has nothing to do 
    with the Google Maps API.
    const markers = locations.map( ( location,
        i ) => {
        return new google.maps.Marker( {
            position: location,
            label: labels[ i % labels.length ],
        } );
    } );

    // Add a marker clusterer to manage the 
    markers.
        // @ts-ignore MarkerClusterer defined via 
        script
    new MarkerClusterer( map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/ javascript /
        examples / markerclusterer / m",
    } );

const locations = [
    { lat: -1.373333, lng: 36.858889 },
    { lat: -1.490000, lng: 35.143890 },
    { lat: -4.050000, lng: 39.666667 },
    { lat: -2.269444, lng: 40.902222 },
];

// const neighborhoods = [{
// lat: -1.373333,
// lng: 36.858889
// },
// {
// lat: -1.490000,
// lng: 35.143890
// },
// {
// lat: -4.050000,
// lng: 39.666667
// },
// {
// lat: -2.269444,
// lng: 40.902222
// },
// ],
// let markers = [];
// let map;

function initMap () {
    map = new google.maps.Map( document.
        getElementById( "map" ), {
        zoom: 7,
        center: {
            lat: -1.37,
            lng: 35.14
        },
    } );









    function drop () {
        clearMarkers();

        for ( let i = 0; i < neighborhoods.
            length; i++ ) {
            addMarkerWithTimeout(
                neighborhoods[ i ], i *
            200 );
        }








        function addMarkerWithTimeout (
            position, timeout ) {
            window.setTimeout( () => {
                markers.push(
                    new google.maps.Marker(
                        {
                            position: position,
                            map,
                            animation: google.
                                maps.
                                Animation.
                                DROP,
                        } )
                );
            }, timeout );
        }

        function clearMarkers () {
            for ( let i = 0; i < markers.
                length; i++ ) {
                markers[ i ].setMap( null );
            }
            markers = [];







            var mmm = null;
            var markerCluster = null;

            // Removes the markers from the 
            map, but keeps them in
                the array.
            function clearMarkers () {
                setMapOnAll( null );
            }

                // Sets the map on all markers 
in the array.
            function setMapOnAll ( map ) {
                for ( var i = 0; i <
                    markerCluster.
                        markers_.length; i +
                    + ) {
                    markerCluster.markers_[
                        i ].setMap( map
                        );
                }







                function SetMap ( s ) {

                    if ( mmm == null )
                        mmm = s.originalMap;
                    else {
                        clearMarkers();
                        markerCluster.
                            markers_ =
                            [];
                    }
                    var map = mmm;
                    var markers = [];
                    for ( var i = 0; i <
                        pointsOnMapList.
                            length; i++ ) {
                        var data =
                            pointsOnMapL
                        ist[ i ];
                        var latLng = new
                            google.maps.
                                LatLng(
                                    data.
                                        location[ 0
                                    ], data.
                                        location[ 1
                                ] );
                        var marker = createMarker( latLng,
                            data.title,
                            map, data.
                            idimp );
                        markers.push(
                            marker );





                        markerCluster = new
                            MarkerCluste
                        rer( map,
                            markers, {

                            mmm = s.original
Map, ','
                                else:
                                ( method ) {

                                    clearMarkers()[ any ]
                                        (
                                            property ); markersCluster_ = []
                                                // 
                                                ( method ) clearMarkers():
                                    //    
                                    ( property ) markerCluster: any

                                    // stackoverflow
                                    // {
                                    // showControls: true,
                                    // key: { google: "XXXXXX" },
                                    //center: center,
                                    //  width: "100%",
                                    //  height: "95%",
                                    //  zoom: zoom,
                                    //  provider: "google",
                                    //  mapType: "satellite",
                                    // autoAdjust: false,
                                    //  onReady: SetMap
                                    // }
                                    var mmm
                                        = null;
                                    var
                                        markerCluster = null;

                                    // 
                                    Removes the markers from the map, but keeps
                                    them in the array.

                                    function clearMarkers () {

                                        setMapOnAll( null );


                                        // 
                                        Sets the map on all markers in the array.

                                        function SetMap ( s ) {

                                            if ( mmm == null )

                                                mmm = s.originalMap;

                                            else {

                                                markerCluster.clearMarkers();

                                            }

                                            var map = mmm;

                                            var markers = [];

                                            for ( var i = 0; i < pointsOnMapList.length; i +
                                                + ) {

                                                var data = pointsOnMapList[ i ];

                                                var latLng = new google.maps.LatLng( data.
                                                    location[ 0 ], data.location[ 1 ] );

                                                var marker = createMarker( latLng, data.
                                                    title, map, data.idimp );

                                                markers.push( marker );

                                            }

                                            markerCluster = new MarkerClusterer( map,
                                                markers, { imagePath: 'images/m' } );

                                        }
                                    }
                                }
                        },
                        )
                    }
                }
            }
        }
    }
}


}
