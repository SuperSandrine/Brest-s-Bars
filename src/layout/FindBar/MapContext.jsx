import { createContext, useState, useContext } from 'react';
import { useAxios } from '../../data/useAxios';

export const MapContext = createContext(null);
export const MapDispatchContext = createContext(null);

export const MapProvider = ({ children }) => {
  //const test = useContext(MapContext);
  //const [dataFetched, error, loading] = useAxios();
  //console.log('dans map provider', dataFetched, error, loading);
  const response = useAxios();
  //console.log('dans provider test 2', test2);

  return <MapContext.Provider value={response}>{children}</MapContext.Provider>;
};

//const places = () =>{ return (useContext(MapContext)[0].data)};

export const usePlaces = () => {
  return useContext(MapContext)[0].data;
};
