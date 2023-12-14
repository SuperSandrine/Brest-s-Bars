import React, { useContext, useState } from 'react';
import ExploreSection from './ExploreSection';
import Error from '../../pages/Error/Error';
import Mapbox from '../../components/Mapbox/Mapbox.jsx';
import FilterSection from './FilterSection.jsx';
import { MapContext } from './MapContext.jsx';
import Button from '../../components/Button/Button.jsx';
import { usePlaces } from './MapContext.jsx';
import Drawer from '../../components/Drawer/Drawer.jsx';

const FindBar = () => {
  const [dataFetched, error, loading] = useContext(MapContext);
  const [displayedPlaces, setDisplayedPlaces] = useState(5);
  const places = usePlaces();
  console.log("places dans findbar", places);
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

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

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
        <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
          <h2 className="font-display text-5xl">
            Trouver le bar qu'il vous faut{' '}
            <span className="text-accent">selon votre humeur</span>
          </h2>
          <FilterSection></FilterSection>
          <ExploreSection
            array={initialArrayCutted}
            displayedPlacesNb={displayedPlaces}
          />
          <Button onClickAction={loadMore}> Afficher plus </Button>
        </Drawer>
        <Mapbox array={initialArrayCutted} />
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
