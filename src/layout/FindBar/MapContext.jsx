import { createContext, useContext, useState } from 'react';
import { useAxios } from '../../data/useAxios';

export const MapContext = createContext(null);
export const MapDataToManipulateContext = createContext(null);

export const MapProvider = ({ children }) => {
  const response = useAxios();
  return <MapContext.Provider value={response}>{children}</MapContext.Provider>;
};

export const MapDataToManipulateProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const updateDataContext = (updatedData) => {
    setData(updatedData);
  };

  return (
    <MapDataToManipulateContext.Provider value={{ data, updateDataContext }}>
      {children}
    </MapDataToManipulateContext.Provider>
  );
};

//integral places array
export const usePlaces = () => {
  return useContext(MapContext)[0].data;
};
