import { API_KEY } from "../javascript/config.js";

var script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
script.async = true;

window.initMaP = function initMap(){
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.727939075765676, lng: -73.78924010674592},
    zoom: 8,
    mapId: '2422339ea24e5ea2',
  });
  const locations = [
    [
      "Push Fitness ðª",
      40.729189248028014,
      -73.78063216441802,
      6,
      "https://openmoji.org/data/color/svg/1F4AA.svg",
      "I only work out because I really, really like donuts ð©",
      "188-10 Union Tpke",
      "Fresh Meadows, NY 11366",
    ],
    [
      "Sup Thai Kitchen",
      40.7267077091399,
      -73.78928373558196,
      5,
      "https://openmoji.org/data/color/svg/1F35C.svg",
      "Out of the frying pan into the fire! -Thai Proverb",
      "178-19 Union Tpke",
      "Fresh Meadows, NY 11366",
    ]];

    for (let i = 0; i < locations.length; i++) {
    const location = locations[i];

    const image = {
      url: location[4],
      scaledSize: new google.maps.Size(50, 50),
    };

    const marker = new google.maps.Marker({
      position: { lat: location[1], lng: location[2] },
      map,
      icon: image,
      title: location[0],
      zIndex: location[3],
      optimized: false,
    });

    const contentString =
      "<div>" +
      `<h1>${location[0]}</h1>` +
      `<h3>${location[5]}</h3>` +
      `<div>${location[6]}</div>` +
      `<div>${location[7]}</div>` +
      "</div>";

    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", () => {
          infoWindow.close();
          // infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      }
    };

document.head.appendChild(script);
