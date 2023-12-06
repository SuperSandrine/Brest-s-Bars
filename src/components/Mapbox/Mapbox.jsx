import React, { useEffect, useState, useRef } from 'react';

// Here's our Mapbox imports
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Remember where we stored our token?
import { environment } from '../../environments/EnvDev';
const accessToken = environment.mapbox.accessToken;

// Import styling
//import '../../../App.css';

mapboxgl.accessToken = accessToken;

const Mapbox = (props) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const [zoom] = useState(12);
  const places = props.places; // array complet ou array trié
  //console.log('places :', places);

  mapboxgl.accessToken = accessToken;

  //center on Brest city Hall
  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-4.486076, 48.390394],
      zoom: zoom,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    //map on load and demand to fit in container
    mapRef.current.on('load', () => {
      mapRef.current.resize();
    });

    //let lat1 = places.location.coordinates[1];
    //let lg1 = places.location.coordinates[0];
    //console.log("coordonnées lat et lg: ", lat1, lg1);

    // Create a default Marker and add it to the map.
    //const mark1 = new mapboxgl.LngLat(lg1, lat1);
    //console.log(mark1);
    //console.log("type places :", typeof(places))

    // ____ marche
    //const markers = [];
    places.map((place) => {
      new mapboxgl.Marker({ color: 'darkblue' })
        .setLngLat([
          place.location.coordinates[0],
          place.location.coordinates[1],
        ])
        .addClassName('markersToGet')
        .addClassName(`${place.id}`)
        .addTo(mapRef.current);
    });
    //console.log("markers qu'est ce :", markers);

    const markersDiv = document.querySelectorAll('div.markersToGet');
    console.log("markersDiv qu'est ce :", markersDiv);
    //_____fin marche

    // // quand la souris passe sur le marker, elle devient pointer sur la carte.
    // marker1Div.addEventListener('mouseenter', (e) => {
    //   mapRef.current.getCanvas().style.cursor = 'pointer';
    //   //marker1.togglePopup()
    // });

    // Popup setup
    const popup = new mapboxgl.Popup({
      className: 'costumPopup',
      closeButton: false,
      closeOnClick: false,
    });

    markersDiv.forEach((marker) => {
      marker.addEventListener('mouseenter', (e) => {
        //console.log("qu'y a til dans 'e' :", e.target.classList[3]);
        const id = e.target.classList[3];
        // trouver les coordonées dans le tableau : "places"
        const dataFromMarker = places.find((place) => place.id == id);
        //console.log('dataFromMarker', dataFromMarker.location.coordinates);
        const coordinatesFromMarker = dataFromMarker.location.coordinates;
        //console.log('places et coor : ', typeof(places[0].id), 'et coor :', typeof(coor), 'et id :', typeof(id));

        marker.style.cursor = 'pointer';
        popup
          .setLngLat(coordinatesFromMarker)
          .setHTML(
            `<div class="bg-accent text-secondary ">
              <h4 class="font-display text-2xl">${dataFromMarker.name}</h4>
              <p>${dataFromMarker.address}</p>
            <div>`
          )
          .addTo(mapRef.current);
        //marker1.togglePopup()
      });
    });

    markersDiv.forEach((marker) => {
      marker.addEventListener('mouseleave', () => {
        marker.style.cursor = 'auto';
        popup.remove();
      });
    });

    // marker1Div.addEventListener('mouseenter', (e) => {
    //   marker1Div.style.cursor = 'pointer';
    //   popup
    //     .setLngLat([
    //       places[0].location.coordinates[0],
    //       places[0].location.coordinates[1],
    //     ])
    //     .setHTML('<h1>Hello World!</h1>')
    //     .addTo(mapRef.current);
    //   //marker1.togglePopup()
    // });

    // const marker1 = new mapboxgl.Marker({ color: 'pink' })
    //   .setLngLat([
    //     places[0].location.coordinates[0],
    //     places[0].location.coordinates[1],
    //   ])
    //   .addTo(mapRef.current);
    // console.log("marker1 qu'est ce :", marker1);
    // const marker1Div = marker1.getElement();
    // console.log("marker1Div qu'est ce :", marker1Div);

    // marker1Div.addEventListener('mouseleave', () => {
    //   marker1Div.style.cursor = 'auto';
    //   popup.remove();
    // });

    //clean up on unmount

    return () => mapRef.current.remove();
  }, [zoom]);

  return (
    <>
      <div
        className="map-container w-full h-1/3"
        style={{ height: 400 }}
        ref={mapContainerRef}
      />
    </>
  );
};

export default Mapbox;
