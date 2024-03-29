import React, { useContext, useState } from 'react';
import ExploreSection from './ExploreSection';
import Error from '../../pages/Error/Error';
import Mapbox from '../../components/Mapbox/Mapbox.jsx';
import FilterSection from './FilterSection.jsx';
import { MapContext, MapDataToManipulateContext } from './MapContext.jsx';
import Button from '../../components/Button/Button.jsx';
import { usePlaces } from './MapContext.jsx';
import Drawer from '../../components/Drawer/Drawer.jsx';

const FindBar = () => {
  const [dataFetched, error, loading] = useContext(MapContext);
  const places = usePlaces();
  //console.log("le map context", dataFetched, error, loading);
  //const { data, updateDataContext } = useContext(MapDataToManipulateContext);
  //console.log("estce que dans finder j'ai le texte?", data);

  const [displayedPlaces, setDisplayedPlaces] = useState(5);
  //console.log("places au début", places);
  //console.log("places dans findbar", places);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const areDataReady = !loading && !error && dataFetched;

  const initialArrayCutted = areDataReady
    ? places.slice(0, displayedPlaces)
    : [];

  const loadMore = () => {
    setDisplayedPlaces(displayedPlaces + 5);
  };

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // const handleCloseDrawer = () => {
  //   setIsDrawerOpen(false);
  // };

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
  } else if (areDataReady) {
    return (
      <div className="relative">
        <button
          className="absolute top-4 left-4 z-50"
          onClick={handleToggleDrawer}
        >
          Toggle Drawer
        </button>
        <Drawer isOpen={isDrawerOpen}>
          <h2 className="font-display text-5xl">
            Trouver le bar qu'il vous faut{' '}
            <span className="text-accent">selon votre humeur</span>
          </h2>
          <FilterSection array={places}></FilterSection>
          <ExploreSection
          //array={initialArrayCutted}
          //displayedPlacesNb={displayedPlaces}
          />
        </Drawer>
        <Mapbox
        //array={initialArrayCutted}
        />
      </div>
    );

    // return (
    //   <div className="relative">
    //     <div className="drawer absolute top-4 z-10 bg-secondary w-full md:w-1/3 lg:w-1/4 p-5">
    //       <h2 className="font-display text-5xl">
    //         Trouver le bar qu'il vous faut{' '}
    //         <span className="text-accent">selon votre humeur</span>
    //       </h2>
    //       <FilterSection></FilterSection>
    //       <ExploreSection
    //         array={initialArrayCutted}
    //         displayedPlacesNb={displayedPlaces}
    //       />
    //       <Button onClickAction={loadMore}> Afficher plus </Button>
    //     </div>
    //     <Mapbox array={initialArrayCutted} />
    //   </div>
    // );
  }
};

export default FindBar;
