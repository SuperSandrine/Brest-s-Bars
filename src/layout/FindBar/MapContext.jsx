import { createContext, useContext, useEffect, useState } from 'react';
import { useAxios } from '../../data/useAxios';

export const MapContext = createContext(null);
export const MapDataToManipulateContext = createContext(null);
export const MapDataToDisplayContext = createContext(null);

export const MapProvider = ({ children }) => {
  const response = useAxios();
  return <MapContext.Provider value={response}>{children}</MapContext.Provider>;
};

export const MapDataToManipulateProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [elementsToShow, setElementsToShow] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const updateDataContext = (updatedData) => {
    setData(updatedData);
  };

  useEffect(() => {
    if (data.length > 0) {
      const slicedData = data.slice(startIndex, startIndex + itemsPerPage);
      setElementsToShow(slicedData);
    }
  }, [data, startIndex, itemsPerPage]);

  const loadFiveMore = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const displayFirstPartPlaces = () => {
    setStartIndex(0);
    //const arrayDisplayedFromContext = array.slice(startIndex, startIndex + itemsPerPage)
    //setElementsToShow(arrayDisplayedFromContext);
  };

  const updateElementsShow = (updatedElements) => {
    setElementsToShow(updatedElements);
  };

  // const PrepareArrayDisplayed = (array) => {
  //   //console.log("je suis dedand", array);
  //   //const arraySliced = array.slice(0, 5);
  //   //return arraySliced;
  //   //setElementsToShow(arraySliced);
  //   useEffect(
  //     (array) => {
  //       const arraySliced = array.slice(startIndex, startIndex + itemsPerPage);
  //       //setElementsToShow(arraySliced);
  //       return arraySliced;
  //     },
  //     [array, startIndex, itemsPerPage]
  //   );
  // };

  return (
    <MapDataToManipulateContext.Provider
      value={{
        data,
        updateDataContext,
        loadFiveMore,
        displayFirstPartPlaces,
        //PrepareArrayDisplayed,
        updateElementsShow,
        loadFiveMore,
        displayFirstPartPlaces,
        elementsToShow,
        startIndex,
        itemsPerPage,
      }}
    >
      {children}
    </MapDataToManipulateContext.Provider>
  );
};

// export const MapDataToDisplayProvider = ({ children }) => {
//   const [elementsToShow, setElementsToShow] = useState(data);
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 5;

//   const loadFiveMore = () => {
//     setStartIndex((prevIndex) => prevIndex + itemsPerPage);
//   };

//   const displayFirstPartPlaces = () => {
//     setStartIndex(0);
//     //const arrayDisplayedFromContext = array.slice(startIndex, startIndex + itemsPerPage)
//     //setElementsToShow(arrayDisplayedFromContext);
//   };

//   const updateElementsShow = (updatedElements) => {
//     setElementsToShow(updatedElements);
//   };

//   const prepareArrayDisplayed = (array) => {
//     //console.log("je suis dedand", array);
//     const arraySliced = array.slice(0, 5);
//     return arraySliced;
//   };

//   return <MapContext.Provider>{children}</MapContext.Provider>;
// };

//integral places array
export const usePlaces = () => {
  return useContext(MapContext)[0].data;
};
