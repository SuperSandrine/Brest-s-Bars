import { useContext, useEffect } from 'react';
import {
  MapDataToManipulateContext,
  usePlaces,
} from '../../layout/FindBar/MapContext';
import { getStarRating } from '../Stars/Stars';

const BarCards = () => {
  //console.log('dans barcard, c koi props', props);
  const places2 = usePlaces();
  console.log("place2", places2);
  const {
    data,
    updateDataContext,
    displayFirstPartPlaces,
    startIndex,
    itemsPerPage,
    elementsToShow,
    PrepareArrayDisplayed,
    updateElementsShow,
  } = useContext(MapDataToManipulateContext);

  //updateDataContext(places2);
  //console.log("combien", data.length > 0);

  //const test = data ? data : places2;
  const test = data.length > 0 ? data : places2;

  //console.log("et test??", test);
  //  const test = data.length === 0 ? places2 : data;


  //const arrayDisplayed = test.slice(startIndex, startIndex + itemsPerPage);

  //console.log('TEST', test);
  //console.log('elementstoShow', elementsToShow);
  // const arrayDisplayed = test.slice(startIndex, startIndex + itemsPerPage);
  // console.log("array displayed const", arrayDisplayed);
  useEffect(() => {
      const slicedData = test.slice(startIndex, startIndex + itemsPerPage);
      console.log("je suis dans useffect", slicedData);
      updateElementsShow(slicedData);
    
  }, [test, startIndex, itemsPerPage]);

  //console.log("elementShow 2", elementsToShow);
  //console.log('data', data);

  // const handleUpdateShows = (newData) => {
  //   updateDataContext(test);
  //   updateElementsShow(newData);
  // };
  //updateElementsShow(arrayDisplayed);
  ///console.log(elementsToShow);
  // const Elements = () => {
  //   if (test) {
  //     PrepareArrayDisplayed(test);
  //   }

  // };
  //updateElementsShow(test);

  //const test2 = test ? prepareArrayDisplayed(test) : console.log('jattends');
  //console.log('TEST2', test2);

  return (
    <div className="">
      {/* {props.array.array.map((place) => ( */}

      {elementsToShow.map((place) => (
        <button
          className="border-2 rounded-lg  hover:bg-accent hover:text-secondary p-2 mb-4 w-full text-left "
          key={place.id}
          data-id={place.id}
          data-name="cardsToGet"
        >
          <h4 className="font-display text-2xl">{place.name}</h4>
          <p>{place.address}</p>
          <p>{place.formatted_phone_number}</p>
          <div className="flex">
            <p>{getStarRating(place.rating)}</p>
            <p>
              : {place.rating} vote from {place.user_ratings_total}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default BarCards;
