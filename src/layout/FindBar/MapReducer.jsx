import { useReducer } from 'react';

const reducer = (state, action) => {
  console.log('voici state et action', { state, action });
  return state;
};

const MapReducer = () => {
  const [,] = useReducer(reducer, {
  });
  return null;
};

export default MapReducer;
