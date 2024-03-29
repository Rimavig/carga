﻿"use strict";

angular.module('newApp')
  .controller('vectorCtrl', ['$scope', function ($scope) {
      $scope.$on('$viewContentLoaded', function () {

          /**** Zooming Map ****/
          var map = AmCharts.makeChart("zooming-map", {

             "type": "map",
             "theme": "dark",
             "projection": "miller",

             "dataProvider": {
                 "map": "worldLow",
                 "getAreasFromMap": true
             },
             "areasSettings": {
                 "autoZoom": true,
                 "color": "#3377AA",
                 "outlineColor": "rgba(255,255,255,0.2)",
                 "selectedColor": "#0086CC",
                 "outlineColor": "#0086CC",
                 "selectedOutlineColor": "#0086CC",
                 "rollOverOutlineColor": "#154660"

             },
             "smallMap": {},
             "export": {
                 "enabled": true,
                 "position": "bottom-right"
             }
         });

         /**** USA Map ****/
         var map = AmCharts.makeChart("usa-map", {
             type: "map",
             theme: "none",
             colorSteps: 10,
             dataProvider: {
                 "map": "ecuadorLow",
                 "areas": [{
                     "id": "EC-A",
                     "value": 4447100
                 }, {
                     "id": "EC-B",
                     "value": 626932
                 }, {
                     "id": "EC-C",
                     "value": 5130632
                 }, {
                     "id": "EC-D",
                     "value": 2673400
                 }, {
                     "id": "EC-F",
                     "value": 33871648
                }, {
                    "id": "EC-E",
                    "value": 2844658
                }, {
                    "id": "EC-G",
                    "value": 4301261
                 }, {
                     "id": "EC-H",
                     "value": 3405565
                 }, {
                     "id": "EC-I",
                     "value": 783600
                 }, {
                     "id": "EC-J",
                     "value": 15982378
                 }, {
                     "id": "EC-K",
                     "value": 8186453
                 }, {
                     "id": "EC-L",
                     "value": 1211537
                 }, {
                     "id": "EC-M",
                     "value": 1293953
                 }, {
                    "id": "EC-N",
                    "value": 1293953
                 }, {
                     "id": "EC-O",
                     "value": 12419293
                 }, {
                     "id": "EC-P",
                     "value": 6080485
                 }, {
                     "id": "EC-Q",
                     "value": 2926324
                 }, {
                     "id": "EC-R",
                     "value": 2688418
                 }, {
                     "id": "EC-S",
                     "value": 4041769
                 }, {
                     "id": "EC-T",
                     "value": 4468976
                 }, {
                     "id": "EC-U",
                     "value": 1274923
                 }, {
                     "id": "EC-V",
                     "value": 5296486
                 }, {
                     "id": "EC-W",
                     "value": 6349097
                 }, {
                     "id": "EC-X",
                     "value": 9938444
                 }, {
                     "id": "EC-Y",
                     "value": 4919479
                 }, {
                     "id": "EC-Z",
                     "value": 2844658
                 
                }, {
                    "id": "EC-SE",
                    "value": 2844658
                
                }, {
                    "id": "EC-SD",
                    "value": 2844658
                
                }
                ]
             },

             areasSettings: {
                 "autoZoom": true
             },

             valueLegend: {
                 "right": 10,
                 "minValue": "little",
                 "maxValue": "a lot!"
             },
             zoomControl: {
                 "homeButtonEnabled": false,
                 "top": 60
             },

         });

         /**** FLIGHT MAP ****/
         var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
         // svg path for plane icon
         var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

         AmCharts.makeChart("flight-map", {
             type: "map",
             pathToImages: "http://www.amcharts.com/lib/3/images/",
             addClassNames: true,
             zoomControl: {
                 top: 90,
                 left: 30,
                 homeButtonEnabled: false
             },
             dataProvider: {
                 map: "worldLow",
                 getAreasFromMap: true,
                 linkToObject: "london",
                 images: [{
                     id: "london",
                     color: "#000000",
                     type: "circle",
                     title: "London",
                     latitude: 51.5002,
                     longitude: -0.1262,
                     scale: 1.5,
                     zoomLevel: 2.74,
                     zoomLongitude: -20.1341,
                     zoomLatitude: 49.1712,
                     lines: [{
                         latitudes: [51.5002, 50.4422],
                         longitudes: [-0.1262, 30.5367]
                     }, {
                         latitudes: [51.5002, 46.9480],
                         longitudes: [-0.1262, 7.4481]
                     }, {
                         latitudes: [51.5002, 59.3328],
                         longitudes: [-0.1262, 18.0645]
                     }, {
                         latitudes: [51.5002, 40.4167],
                         longitudes: [-0.1262, -3.7033]
                     }, {
                         latitudes: [51.5002, 46.0514],
                         longitudes: [-0.1262, 14.5060]
                     }, {
                         latitudes: [51.5002, 48.2116],
                         longitudes: [-0.1262, 17.1547]
                     }, {
                         latitudes: [51.5002, 44.8048],
                         longitudes: [-0.1262, 20.4781]
                     }, {
                         latitudes: [51.5002, 55.7558],
                         longitudes: [-0.1262, 37.6176]
                     }, {
                         latitudes: [51.5002, 38.7072],
                         longitudes: [-0.1262, -9.1355]
                     }, {
                         latitudes: [51.5002, 54.6896],
                         longitudes: [-0.1262, 25.2799]
                     }, {
                         latitudes: [51.5002, 64.1353],
                         longitudes: [-0.1262, -21.8952]
                     }, {
                         latitudes: [51.5002, 40.4300],
                         longitudes: [-0.1262, -74.0000]
                     }],
                     images: [{
                         label: "Flights from London",
                         svgPath: planeSVG,
                         left: 30,
                         top: 30,
                         labelShiftY: 5,
                         color: "#2E2E2E",
                         labelColor: "#2E2E2E",
                         labelRollOverColor: "#2E2E2E",
                         labelFontSize: 20
                     }, {
                         label: "show flights from Vilnius",
                         left: 30,
                         top: 60,
                         labelColor: "#000000",
                         labelRollOverColor: "#2E2E2E",
                         labelFontSize: 11,
                         linkToObject: "vilnius"
                     }]
                 }, {
                     id: "vilnius",
                     color: "#000000",
                     svgPath: targetSVG,
                     title: "Vilnius",
                     latitude: 54.6896,
                     longitude: 25.2799,
                     scale: 1.5,
                     zoomLevel: 4.92,
                     zoomLongitude: 15.4492,
                     zoomLatitude: 50.2631,
                     lines: [{
                         latitudes: [54.6896, 50.8371],
                         longitudes: [25.2799, 4.3676]
                     }, {
                         latitudes: [54.6896, 59.9138],
                         longitudes: [25.2799, 10.7387]
                     }, {
                         latitudes: [54.6896, 40.4167],
                         longitudes: [25.2799, -3.7033]
                     }, {
                         latitudes: [54.6896, 50.0878],
                         longitudes: [25.2799, 14.4205]
                     }, {
                         latitudes: [54.6896, 48.2116],
                         longitudes: [25.2799, 17.1547]
                     }, {
                         latitudes: [54.6896, 44.8048],
                         longitudes: [25.2799, 20.4781]
                     }, {
                         latitudes: [54.6896, 55.7558],
                         longitudes: [25.2799, 37.6176]
                     }, {
                         latitudes: [54.6896, 37.9792],
                         longitudes: [25.2799, 23.7166]
                     }, {
                         latitudes: [54.6896, 54.6896],
                         longitudes: [25.2799, 25.2799]
                     }, {
                         latitudes: [54.6896, 51.5002],
                         longitudes: [25.2799, -0.1262]
                     }, {
                         latitudes: [54.6896, 53.3441],
                         longitudes: [25.2799, -6.2675]
                     }],

                     images: [{
                         label: "Flights from Vilnius",
                         svgPath: planeSVG,
                         left: 100,
                         top: 45,
                         labelShiftY: 5,
                         color: "#2E2E2E",
                         labelColor: "#2E2E2E",
                         labelRollOverColor: "#2E2E2E",
                         labelFontSize: 20
                     }, {
                         label: "show flights from London",
                         left: 106,
                         top: 70,
                         labelColor: "#000000",
                         labelRollOverColor: "#2E2E2E",
                         labelFontSize: 11,
                         linkToObject: "london"
                     }]
                 }, {
                     svgPath: targetSVG,
                     title: "Brussels",
                     latitude: 50.8371,
                     longitude: 4.3676
                 }, {
                     svgPath: targetSVG,
                     title: "Prague",
                     latitude: 50.0878,
                     longitude: 14.4205
                 }, {
                     svgPath: targetSVG,
                     title: "Athens",
                     latitude: 37.9792,
                     longitude: 23.7166
                 }, {
                     svgPath: targetSVG,
                     title: "Reykjavik",
                     latitude: 64.1353,
                     longitude: -21.8952
                 }, {
                     svgPath: targetSVG,
                     title: "Dublin",
                     latitude: 53.3441,
                     longitude: -6.2675
                 }, {
                     svgPath: targetSVG,
                     title: "Oslo",
                     latitude: 59.9138,
                     longitude: 10.7387
                 }, {
                     svgPath: targetSVG,
                     title: "Lisbon",
                     latitude: 38.7072,
                     longitude: -9.1355
                 }, {
                     svgPath: targetSVG,
                     title: "Moscow",
                     latitude: 55.7558,
                     longitude: 37.6176
                 }, {
                     svgPath: targetSVG,
                     title: "Belgrade",
                     latitude: 44.8048,
                     longitude: 20.4781
                 }, {
                     svgPath: targetSVG,
                     title: "Bratislava",
                     latitude: 48.2116,
                     longitude: 17.1547
                 }, {
                     svgPath: targetSVG,
                     title: "Ljubljana",
                     latitude: 46.0514,
                     longitude: 14.5060
                 }, {
                     svgPath: targetSVG,
                     title: "Madrid",
                     latitude: 40.4167,
                     longitude: -3.7033
                 }, {
                     svgPath: targetSVG,
                     title: "Stockholm",
                     latitude: 59.3328,
                     longitude: 18.0645
                 }, {
                     svgPath: targetSVG,
                     title: "Bern",
                     latitude: 46.9480,
                     longitude: 7.4481
                 }, {
                     svgPath: targetSVG,
                     title: "Kiev",
                     latitude: 50.4422,
                     longitude: 30.5367
                 }, {
                     svgPath: targetSVG,
                     title: "Paris",
                     latitude: 48.8567,
                     longitude: 2.3510
                 }, {
                     svgPath: targetSVG,
                     title: "New York",
                     latitude: 40.43,
                     longitude: -74
                 }]
             },
             areasSettings: {
                 unlistedAreasColor: "#FFCC00"
             },
             imagesSettings: {
                 color: "#2E2E2E",
                 rollOverColor: "#2E2E2E",
                 selectedColor: "#000000"
             },
             linesSettings: {
                 color: "#2E2E2E",
                 alpha: 0.4
             },
             backgroundZoomsToTop: true,
             linesAboveImages: true
         });

         /**** ANIMATED MAP ****/
         /** SVG path for target icon */
         var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

         /** SVG path for plane icon  */
         var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

         /** Create the map */
         var map = AmCharts.makeChart("animated-map", {
             "backgroundColor": "#fff",
             "type": "map",
             "theme": "light",
             "dataProvider": {
                 "map": "worldLow",
                 "zoomLevel": 2,
                 "zoomLongitude": -55,
                 "zoomLatitude": 42,

                 "lines": [{
                     "id": "line1",
                     "arc": -0.85,
                     "alpha": 0.3,
                     "latitudes": [48.8567, 43.8163, 34.3, 23],
                     "longitudes": [2.3510, -79.4287, -118.15, -82]
                 }, {
                     "id": "line2",
                     "alpha": 0,
                     "color": "#000000",
                     "latitudes": [48.8567, 43.8163, 34.3, 23],
                     "longitudes": [2.3510, -79.4287, -118.15, -82]
                 }],
                 "images": [{
                     "svgPath": targetSVG,
                     "title": "Paris",
                     "latitude": 48.8567,
                     "longitude": 2.3510
                 }, {
                     "svgPath": targetSVG,
                     "title": "Toronto",
                     "latitude": 43.8163,
                     "longitude": -79.4287
                 }, {
                     "svgPath": targetSVG,
                     "title": "Los Angeles",
                     "latitude": 34.3,
                     "longitude": -118.15
                 }, {
                     "svgPath": targetSVG,
                     "title": "Havana",
                     "latitude": 23,
                     "longitude": -82
                 }, {
                     "svgPath": planeSVG,
                     "positionOnLine": 0,
                     "color": "#000000",
                     "alpha": 0.1,
                     "animateAlongLine": true,
                     "lineId": "line2",
                     "flipDirection": true,
                     "loop": true,
                     "scale": 0.03,
                     "positionScale": 1.3
                 }, {
                     "svgPath": planeSVG,
                     "positionOnLine": 0,
                     "color": "#585869",
                     "animateAlongLine": true,
                     "lineId": "line1",
                     "flipDirection": true,
                     "loop": true,
                     "scale": 0.03,
                     "positionScale": 1.8
                 }]
             },
             "areasSettings": {
                 "unlistedAreasColor": "#8dd9ef"
             },
             "zoomControl": {
                 "homeButtonEnabled": false,
                 "top": 60
             },

             "imagesSettings": {
                 "color": "#585869",
                 "rollOverColor": "#585869",
                 "selectedColor": "#585869",
                 "pauseDuration": 0.2,
                 "animationDuration": 5,
                 "adjustAnimationSpeed": true
             },

             "linesSettings": {
                 "color": "#585869",
                 "alpha": 0.4
             }

         });









      });
  }]);
