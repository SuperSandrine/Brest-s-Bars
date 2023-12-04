import React from 'react';
import ExploreSection from './ExploreSection';
import Error from '../../pages/Error/Error';
import { useAxios } from '../../data/useAxios.jsx';

const FindBar = () => {
  const [dataFetched, error, loading] = useAxios();
  console.log('dataFetched : ', dataFetched);
  console.log('autre datas Fetched : ', error, loading);
  // mettre une page erreur
  if (loading) {
    return (
      <div>
        <h2> Les données sont en chargement, patientez quelques instants...</h2>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  } else {
    return (
      <div className="">
        <h2>Trouver le bar qu'il vous faut selon votre humeur</h2>
        <section>
          <h3>Où boire à Brest</h3>
        </section>
        <ExploreSection places={dataFetched.data} />
      </div>
    );
  }
};

export default FindBar;
