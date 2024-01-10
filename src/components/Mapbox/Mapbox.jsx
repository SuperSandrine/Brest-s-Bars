import React, { useEffect, useState, useRef, useContext } from 'react';

// Here's our Mapbox imports
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Remember where we stored our token?
import { environment } from '../../environments/EnvDev';
import {
  MapDataToManipulateContext,
  usePlaces,
} from '../../layout/FindBar/MapContext';
const accessToken = environment.mapbox.accessToken;

//mapboxgl.accessToken = accessToken;

const Mapbox = (props) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const [zoom] = useState(12);
  //console.log('dans mapbox, props', props);
  // const places = props.array;
  const places = usePlaces();
  const { data, startIndex, itemsPerPage, elementsToShow } = useContext(
    MapDataToManipulateContext
  );

  const test = data.length > 0 ? data : places;

  const arrayDisplayed = test.slice(startIndex, startIndex + itemsPerPage);

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

    // ____ marche
    //const markers = [];
    elementsToShow.map((place) => {
      new mapboxgl.Marker({ color: 'darkblue' })
        .setLngLat([
          place.location.coordinates[0],
          place.location.coordinates[1],
        ])
        .addClassName('markersToGet')
        .addClassName(`${place.id}`)
        .addTo(mapRef.current);
    });

    const markersDiv = document.querySelectorAll('div.markersToGet');
    //console.log("markersDiv qu'est ce :", markersDiv);
    //_____fin marche
    const cardsDiv = document.querySelectorAll(
      'button[data-name="cardsToGet"]'
    );
    //console.log("cardsDiv qu'est ce :", cardsDiv);

    // Popup setup
    const popup = new mapboxgl.Popup({
      className: 'costumPopup',
      closeButton: false,
      closeOnClick: false,
    });

    markersDiv.forEach((marker) => {
      marker.addEventListener('mouseenter', (e) => {
        const id = e.target.classList[3];
        // trouver les coordonées dans le tableau : "places"
        const dataFromMarker = arrayDisplayed.find((place) => place.id == id);

        const coordinatesFromMarker = dataFromMarker.location.coordinates;

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
      });
    });
    markersDiv.forEach((marker) => {
      marker.addEventListener('mouseleave', () => {
        marker.style.cursor = 'auto';
        popup.remove();
      });
    });

    cardsDiv.forEach((card) => {
      card.addEventListener('mouseenter', (e) => {
        //console.log("qu'est ce dans e dans card", e); //121 string
        const id = e.target.dataset.id;
        // trouver les coordonées dans le tableau : "places"
        const dataFromCard = arrayDisplayed.find((place) => place.id == id);
        //console.log('data from card', dataFromCard);

        const coordinatesFromCard = dataFromCard.location.coordinates;
        //console.log("coor", coordinatesFromCard);

        card.style.cursor = 'pointer';
        popup
          .setLngLat(coordinatesFromCard)
          .setHTML(
            `<div class="bg-accent text-secondary ">
              <h4 class="font-display text-2xl">${dataFromCard.name}</h4>
              <p>${dataFromCard.address}</p>
            <div>`
          )
          .addTo(mapRef.current);
      });
    });
    cardsDiv.forEach((card) => {
      card.addEventListener('mouseleave', () => {
        //console.log('mouseleave e', e);
        card.style.cursor = 'auto';
        popup.remove();
      });
    });

    //clean up on unmount
    return () => mapRef.current.remove();
  }, [zoom, test, elementsToShow]);

  return (
    <>
      <div
        className="map-container w-full h-full absolute top-0 z-0"
        style={{ height: 'calc(100vh - 5rem)' }}
        ref={mapContainerRef}
      />
    </>
  );
};

export default Mapbox;
