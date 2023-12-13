import React from 'react';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import { useContext } from 'react';
import { MapContext } from '../../layout/FindBar/MapContext';
import { usePlaces } from '../../layout/FindBar/MapContext';

import { useInitialArrayDisplayed } from '../../data/formatData';

const BarCards = (props) => {
  console.log('dans barcard, c koi props', props);
  //const { initialArrayCutted, loadMore } = useInitialArrayDisplayed();
  //console.log('quau je dans intiial displayed', initialArrayCutted);
  //console.log('barcards props :', props.placesArray);
  // const [dataFetched] = useContext(MapContext);
  // const places = dataFetched.data;

  //const places = useContext(MapContext)[0].data;
  // const places = usePlaces();
  // console.log( "est places marche dans barcard", places);

  // //const places = props.placesArray;
  // //console.log('barcard props test de chemin :', places[0].id);
  // const [displayedPlaces, setDisplayedPlaces] = useState(5);

  // const placesCutted = places.slice(0, displayedPlaces);
  // //console.log('test placescutted', placesCutted);

  // const loadMore = () => {
  //   setDisplayedPlaces(displayedPlaces + 5);
  //   console.log('combien de truc affiché', displayedPlaces);
  // };

  return (
    <div className="">
      {props.array.array.map((place) => (
        <button
          className="border-2 rounded-lg  hover:bg-accent hover:text-secondary p-2 mb-4 w-full text-left"
          key={place.id}
        >
          <h4 className="font-display text-2xl">{place.name}</h4>
          <p>{place.address}</p>
          <p>{place.formatted_phone_number}</p>
          <div className="flex">
            <p>{place.rating}</p>
            <p>: {place.user_ratings_total}</p>
          </div>
          <p>{place.type}</p>
        </button>
      ))}
    </div>
  );
};

export default BarCards;
