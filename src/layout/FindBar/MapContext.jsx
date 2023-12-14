import { createContext, useContext } from 'react';
import { useAxios } from '../../data/useAxios';

export const MapContext = createContext(null);
export const MapDispatchContext = createContext(null);

export const MapProvider = ({ children }) => {
  const response = useAxios();
  return <MapContext.Provider value={response}>{children}</MapContext.Provider>;
};

//integral places array
export const usePlaces = () => {
  return useContext(MapContext)[0].data;
};
