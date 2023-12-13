import { usePlaces } from '../layout/FindBar/MapContext';
import { useState } from 'react';

export const useInitialArrayDisplayed = () => {
  const array = usePlaces(); //utilisation du contexte
  const [displayedPlaces, setDisplayedPlaces] = useState(5);
  const initialArrayCutted = array.slice(0, displayedPlaces);

  const loadMore = () => {
    setDisplayedPlaces(displayedPlaces + 5);
    console.log('combien de truc affiché', displayedPlaces);
  };

  return { initialArrayCutted, loadMore };
};


