import { useContext } from 'react';
import BarCards from '../../components/BarCards/BarCards';
import Button from '../../components/Button/Button';
import { MapDataToManipulateContext } from './MapContext';

const ExploreSection = () => {
  //const places2 = usePlaces();
  //const { data, updateDataContext } = useContext(MapDataToManipulateContext);
  //console.log('je suis dans explore:', data);
  //console.log('ExploreSection props :', props);
  //console.log('ExploreSection props, tableau direct', props.places);
  //const [dataFetched, error, loading] = useContext(MapContext);
  //console.log('quai je dans le context', dataFetched);
  const {
    data,
    updateDataContext,
    loadFiveMore,
    displayFirstPartPlaces,
    startIndex,
    itemsPerPage,
    prepareArrayDisplayed,
    arraySliced,
  } = useContext(MapDataToManipulateContext);

  //console.log('DATAAAAAAA', data, arraySliced);

  return (
    //<section className="w-full md:w-1/3 lg:w-1/4 p-5">
    <section className="">
      <h3 className="font-display text-4xl py-4">Explorer</h3>
      <BarCards />
      <Button onClickAction={() => loadFiveMore()}> Afficher plus </Button>
    </section>
  );
};

export default ExploreSection;
