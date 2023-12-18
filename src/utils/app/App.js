import { useReducer } from 'react';

export const MapApp = () => {
  const [map, dispatch] = useReducer(mapReducer, initialmap);
};

const handleFilterMap(){
  dispatch({
    type: 'filter',
    text: text
  })
}
return(
  <>
  
  </>
)