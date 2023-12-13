import React, { useContext, useState } from 'react';
import ExploreSection from './ExploreSection';
import Error from '../../pages/Error/Error';
import Mapbox from '../../components/Mapbox/Mapbox.jsx';
import FilterSection from './FilterSection.jsx';
import { MapContext } from './MapContext.jsx';
import { useInitialArrayDisplayed } from '../../data/formatData';
import Button from '../../components/Button/Button.jsx';
import { usePlaces } from './MapContext.jsx';

const FindBar = () => {
  const [dataFetched, error, loading] = useContext(MapContext);
  
  //const [dataFetched, error, loading] = useAxios();
  //const [dataFetched, error, loading] = useContext(MapContext);
  
  //const [dataMap, dataDispatch] = useReducer();
  //console.log('dataFetched test: ', dataFetched, error, loading);
  //console.log('autre datas Fetched : ', error, loading);
  // mettre une page erreur
  if (loading) {
    return (
      <div>
        <h2 className="font-display text-5xl p-5">
          Les données sont en chargement, patientez quelques instants...
        </h2>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  } else if (dataFetched) {
    const [displayedPlaces, setDisplayedPlaces] = useState(5);
    const initialArrayCutted = usePlaces().slice(0, displayedPlaces);
    const loadMore = () => {
      setDisplayedPlaces(displayedPlaces + 5);
    };

    return (
      <div className="relative">
        <div className="drawer absolute top-4 z-10 bg-secondary w-full md:w-1/3 lg:w-1/4 p-5">
          <h2 className="font-display text-5xl">
            Trouver le bar qu'il vous faut{' '}
            <span className="text-accent">selon votre humeur</span>
          </h2>
          <FilterSection></FilterSection>
          <ExploreSection array={initialArrayCutted} displayedPlacesNb={displayedPlaces}/>
          <Button onClickAction={loadMore}>Afficher plus </Button>
        </div>
        <Mapbox array={initialArrayCutted}  />
      </div>
    );
  }
};

export default FindBar;
