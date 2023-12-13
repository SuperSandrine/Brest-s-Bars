import React from 'react';
import Header from '../../layout/Header/Header';
import FindBar from '../../layout/FindBar/FindBar';
import { MapProvider } from '../../layout/FindBar/MapContext';

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <MapProvider>
        <FindBar />
      </MapProvider>
    </div>
  );
};

export default Home;
