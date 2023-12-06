import React, { useEffect, useState, useRef } from 'react';

// Here's our Mapbox imports
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Remember where we stored our token?
import { environment } from '../../Environments/EnvDev';
const accessToken = environment.mapbox.accessToken;

// Import styling
//import '../../../App.css';

mapboxgl.accessToken = accessToken;

const Mapbox = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const [lng] = useState(-4.4834526);
  const [lat] = useState(48.3831122);
  const [zoom] = useState(10);

  mapboxgl.accessToken = accessToken;

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    mapRef.current.on('load', () => {
      mapRef.current.resize();
    });

    return () => mapRef.current.remove();
  }, [lat, lng, zoom]);

  // const map = new MapBoxGl.Map({
  //   container: 'mapRef', // container ID
  //   style: 'mapbox://styles/mapbox/streets-v12', // style URL
  //   center: [-74.5, 40], // starting position [lng, lat]
  //   zoom: 9, // starting zoom
  // });
  // return <div id="mapRef"></div>;

  return (
    <>
      <div
        className="map-container w-full h-1/3"
        style={{ height: 400 }}
        //style="visibility: visible; width: 100vw; height: 50vh"
        ref={mapContainerRef}
      />
    </>
  );
};
// const Mapbox = () => {
//   const [viewport, setViewPort] = useState(
//     // latitude: -4.4834526,
//     // longitude: 48.3831122,
//     // width: '70vw',
//     // height: '70vh',
//   );
//   return (
//     <div>
//       <MapBoxGl {...viewport} mapboxApiAccessToken={accessToken}></MapBoxGl>
//     </div>
//   );
// };

export default Mapbox;