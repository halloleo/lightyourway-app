// Indicates that Cordova is full loaded
// More info: https://cordova.apache.org/docs/en/latest/cordova/events/events.html
document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady(){
    console.log("Loading ArcGIS...");
    require(
        [
            "esri/map",
            "esri/layers/CSVLayer",
            "esri/symbols/PictureMarkerSymbol",
            "esri/graphic",
            "esri/SpatialReference",
            "esri/geometry/Point",
            "esri/layers/CSVLayer",
            "esri/Color",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/renderers/SimpleRenderer",
            "esri/InfoTemplate",
            "esri/config",
            "dojo/on",
            "dojo/domReady!"
        ], function(
            Map,CSVLayer,Color,SimpleMarkerSymbol,SimpleRenderer,InfoTemplate,esriConfig,PictureMarkerSymbol,Graphic,SpatialReference,Point,on
        ) {
            map = new Map("mapDiv",{
                //basemap: "streets",
                basemap: "gray",
                center: [149.129759,-35.312396],
                zoom: 13
            });

            // csv = new CSVLayer("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv", {
            //     copyright: "USGS.gov"
            // });
            csv = new CSVLayer("http://schwa09.it.usyd.edu.au:8000/data/ACT_Streetlights_arcgis.csv", {
                copyright: "act.gov.au"
            });

            
            var orangeRed = new Color([238, 69, 0, 0.5]); // hex is #ff4500
            var marker = new SimpleMarkerSymbol("solid", 15, null, orangeRed);
            var renderer = new SimpleRenderer(marker);
            csv.setRenderer(renderer);
            var template = new InfoTemplate("${type}", "${place}");
            csv.setInfoTemplate(template);
            map.addLayer(csv);

            // Wait until map has loaded before starting geolocation
            map.on("load",startGeolocation);
            // Create the marker symbol
            var markerSymbol = new PictureMarkerSymbol({
                "angle":0,
                "xoffset":0,
                "yoffset":0,
                "type":"esriPMS",
                "url":"images/green-pin.png",
                "width":35,
                "height":35
            });

            function startGeolocation(){
                console.log("Starting geolocation...");
                var location = navigator.geolocation.watchPosition(
                    locationSuccess,
                    locationError,
                    {
                        maxAge: 250000,
                        timeout: 15000,
                        enableHighAccuracy:true
                    }
                );
            }

            // Handle location success
            function locationSuccess(position){
                if(position.coords.latitude != null || position.coords.longitude != null){
                    console.log("long: " + position.coords.longitude + ", lat: " + position.coords.latitude);
                    var wgsPt = new Point(position.coords.longitude,position.coords.latitude, new SpatialReference({wkid:4326}));
                    map.graphics.add(new Graphic(wgsPt, markerSymbol));
                    map.centerAndZoom(wgsPt, 12);
                }
            }

            function locationError(error){
                console.log("locationError code: " + error.code);

                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        alert("User denied request for geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                       alert("Location information is unavailable. Check application settings, make sure location permissions have been granted");
                        break;
                    case error.TIMEOUT:
                        alert( "The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        alert("An unknown error occurred.");
                        break;
                }
            }
        }
    );
}
