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
  const [elementsToShow, setElementsToShow] = useState(null);
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
  };

  const updateElementsShow = (updatedElements) => {
    setElementsToShow(updatedElements);
  };

  return (
    <MapDataToManipulateContext.Provider
      value={{
        data,
        updateDataContext,
        loadFiveMore,
        displayFirstPartPlaces,
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

export const usePlaces = () => {
  return useContext(MapContext)[0].data;
};
